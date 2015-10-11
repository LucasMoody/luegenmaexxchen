Template.game.helpers({
	showPlayerInput: function(){
		console.log('Game.js Aufruf');
		if(this){
			console.log('game.js: this war nicht definiert');
			return;
		}
		var currentPlayer = Session.get('currentPlayer');
		if(currentPlayer == undefined){
			currentPlayer = {};
		}
		console.log('game.helpers:')
		console.log(this._id);
		console.log(currentPlayer[getCurrentGame(this._id)['curPlayer']]);

        if(currentPlayer[getCurrentGame(this._id)] != undefined){
            return false;
        }
        else{
        	return true;
        }
	}
});


getCurrentGame = function(_id){
		return Games.findOne(_id);
	}