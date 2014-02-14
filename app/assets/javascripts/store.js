DS.RESTAdapter.reopen({
  namespace: "api/v1"
});

Emberprod.Store = DS.Store.extend({
  revision: 11,
  adapter: DS.RESTAdapter.create()
  //adapter: '_ams'
});