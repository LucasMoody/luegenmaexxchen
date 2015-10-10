var diceDep = new Tracker.Dependency();
var dice1 = 0;
var dice2 = 0;

Template.dices.helpers({

   number: function() {
      diceDep.depend();
      return [
         dice1,
         dice2
      ]
   }//Games.findOne({})['curAnnouncement'].toString().split("")
});

Template.buttons_send_ann.events({
	'click #btn_send_ann': function(evt, template) {
		evt.preventDefault();
		var text_value = $("#input_send_ann").val();
		Games.insert(this._id, {$set:{curAnnouncement:text_value}});
	}});
   
Template.buttons_decision.events({
	'click #btn_throw_dice': function(evt, template) {
		evt.preventDefault();
      var rand_value = Math.floor(Math.random() * 6 + 1);
      maxInterval = 5;
      i = setInterval(function(){
      if(maxInterval == 0) {
         stopInterval(i);
      }
      maxInterval--;
      dice1 = Math.floor(Math.random() * 6 + 1);
      dice2 = Math.floor(Math.random() * 6 + 1);
      diceDep.changed();
      },500)
		Games.update({_id:this._id}, {$set:{curDiceThrow:rand_value}});
      console.log(rand_value);
	}});