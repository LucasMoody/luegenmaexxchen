Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'//,
	//waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'gamesList', template: "gamesList"});
Router.route('/newgame/', {name: 'newGame', template: 'newGame'});
Router.route('/game/:_id', {
	name: 'game',
	template: "game",
	data: function(test) {
		return Games.findOne(this.params._id);
	}
});
//Router.onBeforeAction('dataNotFound', {only: 'postPage'});

Router.route('/test', {
	name: 'test',
	template: 'game'
});