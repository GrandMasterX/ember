Emberprod.AlbumsController = Ember.ArrayController.extend({
  sortProperties: ['id'],
  sortAscending: false,
  filteredContent: function() {
    content = this.get('arrangedContent')
    content.filter(function(item, index) {
      !(item.get('isNew')).property('content.@each')
    })
  }
})