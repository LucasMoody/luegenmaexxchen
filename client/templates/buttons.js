combinations = [[3,1], [4,1], [5,1], [6,1], [1,1], [2,2], [3,3], [4,4], [5,5], [6,6], [2,1]];
curIndex = 0;

Template.buttons_send_ann.events({
	'click #btn_send_ann': function(evt, template) {
		evt.preventDefault();
      Games.update(this._id, {$set:{curAnnouncement:dice1*10 + dice2}});
	},
   'click #btn_plus': function(evt, template) {
		evt.preventDefault();
      if (curIndex < 10)
         curIndex++;
      updateThrowDices();
	},
   'click #btn_minus': function(evt, template) {
		evt.preventDefault();
      if (curIndex > 0)
         curIndex--;
      updateThrowDices();
	}
});

function updateThrowDices() {
   dice1 = combinations[curIndex][0];
   dice2 = combinations[curIndex][1];
   diceDep.changed();
}
   
Template.buttons_decision.events({
	'click #btn_throw_dice': function(evt, template) {
		evt.preventDefault();
      var remainingIntervals = 10;
      var intervalId = setInterval(function(){
         if (remainingIntervals == 0) {
            clearInterval(intervalId);
         }
         remainingIntervals--;
         curIndex = Math.floor(Math.random() * 11);
         updateThrowDices();
         }, 80)
	}
});