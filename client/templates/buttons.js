combinations = [[2,3], [2,4], [2,5], [2,6], [3,1], [3,2], [3,4], [3,5], [3,6], [4,1], [4,2], [4,3], [4,5], [4,6], [5,1], [5,2], [5,3], [5,4], [6,1], [6,2], [6,3], [6,4], [6,5], [1,1], [2,2], [3,3], [4,4], [5,5], [6,6], [2,1]];
curIndex = 0;

Template.buttons_send_ann.events({
	'click #btn_send_ann': function(evt, template) {
		evt.preventDefault();
      Games.update(this._id, {$set:{curAnnouncement:dice1*10 + dice2}});
	},
   'click #btn_plus': function(evt, template) {
		evt.preventDefault();
      if (curIndex < 29)
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
         curIndex = Math.floor(Math.random() * 29);
         updateThrowDices();
         }, 80)
	}
});