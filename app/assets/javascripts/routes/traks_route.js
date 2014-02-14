Emberprod.TracksRoute = Ember.Route.extend({
  model: function() {
    return Emberprod.Track.find();
  }
});