Emberprod.PostsRoute = Ember.Route.extend({
  model: function(params) {
    return Emberprod.Post.find(params.id);
  },

  serialize: function(model) {
    return { id: model.id };
  }

});

Emberprod.PostsShowRoute = Ember.Route.extend({
  model: function(params) {
    return Emberprod.Post.find(params.id);
  },

  serialize: function(model) {
    return { id: model.id };
  }
 });

Emberprod.PostEditRoute = Ember.Route.extend({
  model: function(params) {
    return Emberprod.Post.find(params.id);
  }
 });

Emberprod.PostsNewRoute = Ember.Route.extend({
  model: function() {
    return Emberprod.Post.createRecord();
  },
  setupController: function(controller, model){
    controller.set('content', model)
  },

  actions: {
    cancel: function() {
      this.modelFor("postsNew").get("transaction").rollback();
    },

    save: function() {
      var route = this
      this.currentModel.save().then(function(post) {
        route.transitionTo('posts.show', post)
      })
    }
  }


});

Emberprod.PostsEditRoute = Ember.Route.extend({
  model: function() {
    return Emberprod.Post.find(params.post_id);
  }
});
