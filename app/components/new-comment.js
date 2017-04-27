import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment() {
      var params = {
        username: this.get('username'),
        message: this.get('message'),
        post: this.get('post')
      };
      this.sendAction('saveComment', params)
    }
  }
});
