import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend({
	normalizeFindRecordResponse(store,type,payload){
		return{
			data:{
				attributes:{
					welcome:payload.welcome,
					wish:payload.wish
				}
			}
		};
	}
});
