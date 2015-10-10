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
        var currentList = this.params._id;
        return Games.findOne({ _id: currentList });
    }
});