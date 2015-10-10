Template.gamesList.events({
	'click .new-game': function(evt, template) {
		evt.preventDefault();
		console.log("Test");
		var newGame = Games.insert({
			players: [],
			curAnnouncement: 0,
			curDiceThrow: 0
		});
		Router.go('/game/'+newGame);
	}
});