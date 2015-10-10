Template.userinput.onRendered(function()	{
	var curGame = this.data;
    $('#userinput').modal('show');
    $('#userinput-ok').click(function(evt) {
    	var username = $('#userinput-field').val();
    	if(username && username !== "") {
    		var userId = Users.insert({
    			name: username
    		});
    		curGame.players.push(userId);
    		Games.update({_id: curGame._id}, curGame);
    		$('#userinput').modal('hide');
    	}
    })
});
