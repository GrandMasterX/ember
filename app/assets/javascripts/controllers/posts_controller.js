Emberprod.PostsController = Ember.ArrayController.extend({
  sortProperties: ["id"],
  sortAscending: false,
  filteredContent: function() {
    content = this.get("arrangedContent")
    content.filter(function(item, index) {
      !(item.get("isNew")).property("arrangedContent.@each")
    })
  },
  edit: function() {
    if (window.confirm("Are you sure you want to edit this post?")) {
      this.get('content').commit();
      return this.transitionToRoute('posts');
    }
  },
  delete: function() {
    if (window.confirm("Are you sure you want to delete this post?")) {
      this.get('content').deleteRecord();
      this.get('store').commit();
      return this.transitionToRoute('post');
    }
  }
})
