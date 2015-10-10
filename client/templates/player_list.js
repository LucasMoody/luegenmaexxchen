Template.player_list.helpers({
    players: function(data) {
    	var curGame = this;
        return Games.findOne({_id: curGame._id})['players'].map(function(val) {return Users.findOne({_id: val}).name;});
    }
});