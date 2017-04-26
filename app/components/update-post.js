import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(post) {
      var params = {
        body: this.get('body'),
        date: this.get('date'),
        image: this.get('image'),
        title: this.get('title')
      };
      this.sendAction('update', post, params);
    }
  }
});
