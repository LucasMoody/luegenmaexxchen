Template.userinput.onRendered(
    function()	{
        $('#userinput').modal('show');
});

Template.userinput.events({
    'click #userinput-ok' : function(evt){
                curGame = this;
        console.log('userinput.js: curGame = ');
        console.log(curGame);
        if(curGame == null || curGame == undefined){
            console.log("curGame ist null");
            return;
        }
        var username = $('#userinput-field').val();
        if(username && username !== "") {
            if(Games.findOne(curGame['_id']).curPlayer === ""){
                Games.update({ _id: curGame['_id']},
                {   "$push": {
                      'players': username
                  },
                    "$set": {
                      'curPlayer': username
                  }
                }
            );
            }
            else{
                Games.update({ _id: curGame['_id']},
                { "$push": {
                      'players': username
                  }
                }
            );
            }
            $('#userinput').modal('hide');
            var currentPlayer = Session.get('currentPlayer');
            currentPlayer[curGame._id]  = username;
            Session.set('currentPlayer', currentPlayer)
        }
        else{
            alert("Wähle einen Namen!");
        }

    }
});
