Emberprod.AlbumsRoute = Ember.Route.extend({
  model: function() {
    return Emberprod.Album.find();
  }
  
});

Emberprod.AlbumsNewRoute = Ember.Route.extend({
	model: function() {
	   var transaction = this.get('store').transaction();
	   var album = transaction.createRecord(Emberprod.Album, {
	        title: 'Please, fill the title',
	        genre: 'Plaese, choose genre',
	        cover: '',
	        releaseDate: Date()
	   });
	  return album;
	},
	events: {
		createAlbum: function(album) {
			album.get('transaction').commit();
		}
	}
 });