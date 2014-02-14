Emberprod.AlbumsRoute = Ember.Route.extend({
  model: function() {
    return Emberprod.Album.find();
  }
});