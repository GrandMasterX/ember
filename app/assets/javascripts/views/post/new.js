Emberprod.PostsNewView = Ember.View.extend({
  tagName:      'form',
  templateName: 'post/new',

  actions: {

    cancel: function() {
      this.get("parentView").hideNew();
    }

  },

  init: function() {
    this._super();
    console.log(this.get('posts'))
    this.set("post", Emberprod.Post.createRecord());
  },

  didInsertElement: function() {
    this._super();
    this.$('input:first').focus();
  },

});
