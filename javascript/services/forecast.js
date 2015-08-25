console.log(apiKey);
app.factory('forecast', ['$http', function($http){
	return $http.get('http://api.wunderground.com/api/' + apiKey + '/geolookup/conditions/q/IA/Cedar_Rapids.json')
		.success(function(data){
			console.log('get request');
			return data;
		})
		.error(function(err){
			console.log('get failed');
			return err;
		});
}]);

