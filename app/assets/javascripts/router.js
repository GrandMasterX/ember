// For more information see: http://emberjs.com/guides/routing/

Emberprod.Router.map(function() {

  this.resource("posts", function() {
    this.resource("post", { path: ":post_id" });
  });

  this.resource("albums", function() {
    this.resource("album", { path: ":album_id" });
  });

  this.resource("tracks", function() {
    this.resource("track", { path: ":track_id" });
  });
  
});