import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host:'http://localhost:8080',
	headers:{
		"Access-Control-Allow-Origin":"*",
		"Access-Control-Allow-Headers" :"Content-Type,X-Requested-With,accept,Origin,Access-Control-Request-Method,Access-Control-Request-Headers"
	}
});
