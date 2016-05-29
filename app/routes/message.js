import Ember from 'ember';

export default Ember.Route.extend({
// 	model(){
// 	return this.store.findRecord('message','message');
// }
model() {
    return this.store.findRecord('message', 'message-list'); // or any other user you like
  }
});
