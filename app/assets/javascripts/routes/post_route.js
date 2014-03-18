Emberprod.PostRoute = Ember.Route.extend({
  model: function(params) {
  	return Emberprod.Post.find(params.id);
  },

  serialize: function(model) {
    return { id: model.id };
  }

});
