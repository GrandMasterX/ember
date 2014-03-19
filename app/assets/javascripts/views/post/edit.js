Emberprod.PostsEditView = Ember.View.extend({
  tagName: 'form',
  templateName: 'post/edit',

  init: function() {
    this._super();
    console.log(this.get('parentView').get('post'))
    this.set("post", this.get('parentView').get('post').copy());
  },

  didInsertElement: function() {
    this._super();
    this.$('input:first').focus();
  },

  cancelForm: function() {
    this.get("parentView").hideEdit();
  },

  submit: function(event) {
    var self = this;
    var post = this.get("post");

    event.preventDefault();

    post.saveResource()
      .fail( function(e) {
        App.displayError(e);
      })
      .done( function() {
        var parentView = self.get("parentView");
        parentView.get("post").duplicateProperties(post);
        parentView.hideEdit();
      });
  }
});
