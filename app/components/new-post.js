import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    savePost() {
      var params = {
        title: this.get('title'),
        image: this.get('image'),
        date: this.get('date'),
        body: this.get('body'),
      };
      this.sendAction('savePost', params);
    }
  }
});
