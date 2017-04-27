import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  sortedReviews: Ember.computed.sort('posts', 'sortDefinition'),
  sortDefinition: ['timestamp'],
});
