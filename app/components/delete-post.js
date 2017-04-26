import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(post) {
      if (confirm("YOU'RE GOING TO MAKE A HUGE MISTAKE")) {
        this.sendAction('destroyPost', post);
      }
    }
  }
});
