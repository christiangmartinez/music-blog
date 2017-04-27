import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr(),
  date: DS.attr(),
  image: DS.attr(),
  title: DS.attr(),
  comments: DS.hasMany('comment', {async: true}),
  timestamp: DS.attr()
});
