Meteor.publish("allSnaps", function(){
    return Snaps.find({});
});
