Template.gamesList.events({
	'click .new-game': function(evt, template) {
		evt.preventDefault();
		var newGame = Games.insert({
			players: [],
			curPlayer: '',
			curAnnouncement: 0,
			curDiceThrow: 0
		});
		console.log(newGame);
		Router.go('/'+newGame);
	}
});

Template.gamesList.helpers({
	'games' : function() {
		return Games.find();
	}
});