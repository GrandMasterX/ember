Emberprod.PostsRoute = Ember.Route.extend({
  model: function() {
    return Emberprod.Post.find();
  }
});