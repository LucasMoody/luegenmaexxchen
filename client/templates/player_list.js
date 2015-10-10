Template.player_list.helpers({

    players: function() {
        return Games.findOne({})['players'];
    }
});