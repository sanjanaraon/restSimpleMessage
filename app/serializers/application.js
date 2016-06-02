import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend({
	normalizeFindRecordResponse(store,type,payload){
		return{
			data:{
				id:payload.message,
				type:type.modelName,
				attributes:{
					welcome:payload.message.welcome,
					wish:payload.message.wish
				}
			}
		};
	}
});
