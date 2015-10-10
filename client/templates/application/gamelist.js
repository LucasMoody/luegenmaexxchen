Template.gamesList.events({
	'click .new-game': function(evt, template) {
		evt.preventDefault();
		var newGame = Games.insert({
			players: [],
			curAnnouncement: 0,
			curDiceThrow: 0
		});
		console.log(newGame);
		Router.go('/game/'+newGame);
	}
});