Emberprod.Track = DS.Model.extend({
  title: DS.attr('string'),
  genre: DS.attr('string'),
  file: DS.attr('string'),
  cover: DS.attr('string'),
  album_id: DS.attr('number'),
  releaseDate: DS.attr('timestamp')
});
