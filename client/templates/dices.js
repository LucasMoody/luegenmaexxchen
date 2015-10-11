diceDep = new Tracker.Dependency();
dice1 = 0;
dice2 = 0;

Template.dices_ann.helpers({
   number: function() {
      return Games.findOne({})['curAnnouncement'].toString().split("");
   }
});

Template.dices_throw.helpers({
   number: function() {
      diceDep.depend();
      return [
         dice1,
         dice2
      ]
   }
});

Template.dices_throw.events({
	'click #dice': function(evt, template) {
		evt.preventDefault();
      var remainingIntervals = 10;
      var intervalId = setInterval(function(){
         if (remainingIntervals == 0) {
            clearInterval(intervalId);
         }
         remainingIntervals--;
         dice1 = Math.floor(Math.random() * 6 + 1);
         dice2 = Math.floor(Math.random() * 6 + 1);
         diceDep.changed();
         }, 80)
	}
});