Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'//,
	//waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'gamesList', template: "gamesList"});

Router.route('/newgame/', {name: 'newGame', template: 'newGame'});

Router.route('/:_id', {
	name: 'game',
    template: 'game',
    data: function(){
    	console.log('Router.js');
    	console.log(this.params._id);
        return Games.findOne(this.params._id);
	}
});