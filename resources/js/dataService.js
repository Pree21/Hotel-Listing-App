app.factory('dataService', function($q,$http){
	var api = {};
	
	api.getHotels = function(){
		var deferred = $q.defer();
		$http.get('api.json').then(function(response){
			deferred.resolve(response.data);
		});
		return deferred.promise;
	};
	
	return api;
});
