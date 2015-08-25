console.log(apiKey);
app.factory('forecast', ['$http', function($http){
	return $http.get('http://api.wunderground.com/api/' + apiKey + '/geolookup/forecast/conditions/q/OR/Troutdale.json')
		.success(function(data){
			console.log('get request');
			return data;
		})
		.error(function(err){
			console.log('get failed');
			return err;
		});
}]);

