Emberprod.TracksRoute = Ember.Route.extend({
  model: function() {
    return Emberprod.Track.find();
  }
});


Emberprod.TracksNewRoute = Ember.Route.extend({
  model: function() {
    var transaction = this.get("store").transaction();

    var track = transaction.createRecord(App.Track, {});
    return track;
  },

  events: {
    createTrack: function(track) {
      track.get("transaction").commit();
    }
  }
});

Emberprod.TracksCreateRoute = Ember.Route.extend({
  model: function() {
    return Emberprod.Track.find();
  }
});