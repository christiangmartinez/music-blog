import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

  savePost() {
    var params = {
      body: this.get('body'),
      date: this.get('date'),
      image: this.get('image'),
      title: this.get('title')
    };
    this.sendAction('savePost', params);
    }
  }
});
