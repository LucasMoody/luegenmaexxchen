Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'//,
	//waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'gamesList'});

Router.route('/game/:_id', {
	name: 'game',
	data: function() {return Games.findOne(this.params._id);}
});
//Router.onBeforeAction('dataNotFound', {only: 'postPage'});

Router.route('/test', {
	name: 'test',
	template: 'game'
});