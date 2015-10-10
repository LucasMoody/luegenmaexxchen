Template.userinput.onRendered(function()	{
	var curGame = this.data;
    var currentPlayer = Session.get('currentPlayer');
    if(currentPlayer[curGame['_id']]){
        return;
    }
    $('#userinput').modal('show');
    $('#userinput-ok').click(function(evt) {
    	var username = $('#userinput-field').val();
    	if(username && username !== "") {
    		Games.update({ _id: curGame['_id']},
                { "$push": {
        		      'players': username
                  }
                }
    		);
    		$('#userinput').modal('hide');
            currentPlayer[curGame._id]  = username;
            Session.set('currentPlayer', currentPlayer)
    	}
        else{
            alert("error");
        }
    })
});
