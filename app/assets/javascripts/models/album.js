Emberprod.Album = DS.Model.extend({
  title: DS.attr('string'),
  genre: DS.attr('string'),
  cover: DS.attr('string'),
  user_id: DS.attr('number'),
  releaseDate: DS.attr('date')
});
