Template.dices_ann.helpers({
   number: Games.findOne({})['curAnnouncement'].toString().split("")
});

Template.dices_throw.helpers({
   number: Games.findOne({})['curAnnouncement'].toString().split("")
});