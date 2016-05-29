import DS from 'ember-data';

export default DS.Model.extend({
  welcome:DS.attr('string'),
  wish:DS.attr('string')
});
