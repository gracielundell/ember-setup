import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('announcement');
  },
  actions: {
    save3(params) {
      var newAnnouncement = this.store.createRecord('announcement', params);
      newAnnouncement.save();
    },
    destroyAnnouncement(announcement) {
      announcement.destroyRecord();
      this.transitionTo('announcement');
    }
  }
});
