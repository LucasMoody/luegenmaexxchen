Template.buttons_send_ann.events({
	'click #btn_send_ann': function(evt, template) {
		evt.preventDefault();
		var text_value = $("#input_send_ann").val();
		Games.insert(this._id, {$set:{curAnnouncement:text_value}});
	}});