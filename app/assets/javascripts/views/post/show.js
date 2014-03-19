Emberprod.PostsShowView = Ember.View.extend({
  templateName: 'post/show',
  classNames:   ['show-item'],
  tagName:      'tr',

  actions: {

    doubleClick: function() {
      console.log('dblClick')
      this.showEdit();
    },

    showEdit: function() {
      this.set('isEditing', true);
    },

    hideEdit: function() {
      this.set('isEditing', false);
    },

    destroyRecord: function() {
      var post = this.get("post");

      post.destroyResource()
        .fail( function(e) {
          App.displayError(e);
        })
        .done(function() {
          App.contactsController.removeObject(post);
        });
    }

  }

});
