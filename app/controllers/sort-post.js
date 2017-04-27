import Ember from 'ember';

export default Ember.Controller.extend({
  sortedModel: function() {
    return this.get('post').sortBy('timestamps').reverse();
  }
});
