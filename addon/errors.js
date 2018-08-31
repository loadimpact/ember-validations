import Ember from 'ember';

const {
  A: emberArray,
  Object: EmberObject,
  get,
  set
} = Ember;

export default EmberObject.extend({
  unknownProperty(property) {
    if (property !== 'setUnknownProperty') {
      set(this, property, emberArray());
      return get(this, property);
    }
  }
});
