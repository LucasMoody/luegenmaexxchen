Template.userinput.onRendered(function()	{
	var curGame = this.data;
    console.log(curGame);
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
    	}
        else{
            alert("error");
        }
    })
});
