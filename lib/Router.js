Router.configure({
    layoutTemplate: 'mainLayout'
});


Router.route('/', {
    name: "snap",
    data: function(){
        var snaps = Snaps.find().fetch();
        return {
            snaps: snaps
        };
    },
    waitOn: function(){
        return Meteor.subscribe("allSnaps");
    }
});

Router.route('/cam1', {
    name: "cam1",
    data: function(){
        var snaps = Snaps.find().fetch();
        return {
            snaps: snaps
        };
    },
    waitOn: function(){
        return Meteor.subscribe("allSnaps");
    }
});

Router.route('/cam2', {
    name: "cam2",
    data: function(){
        var snaps = Snaps.find().fetch();
        return {
            snaps: snaps
        };
    },
    waitOn: function(){
        return Meteor.subscribe("allSnaps");
    }
});
