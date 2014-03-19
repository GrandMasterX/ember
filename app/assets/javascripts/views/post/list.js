Emberprod.PostsView = Ember.View.extend({
  templateName: 'post/list',
  postsBinding: 'Emberprod.PostsController',
  isNewVisible:false,

  hideNew: function() {
    this.set('isNewVisible', false);
  },

  actions: {

    showNew: function() {
      this.set('isNewVisible', true);
    },

    refreshListing: function() {
      Emberprod.posts.findAll();
    }

  }

});
