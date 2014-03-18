Emberprod.Router.map(function() {

  this.resource("posts", function() {
    this.route("new")
    this.route('show', { path: 'show/:id'})
  });

  this.resource("albums", function() {
    this.route("new")
    this.route("show", { path: "/album/:id" })
    this.route('edit', { path: '/album/:id/edit'})
  });

  this.resource("tracks", function() {
    this.route("new")
    this.route("show", { path: "/track/:id" })
    this.route('edit', { path: 'track/:id/edit'})
  });

});
