Template.dices.helpers({
   number: Games.findOne({})['curAnnouncement'].toString().split("")
});