app.controller('mainController', ['$scope', 'forecast', '$http', function($scope, forecast, $http){
	forecast.success(function(data){
		// $scope.location = data.current_observation.display_location.full;
		// $scope.temperature = data.current_observation.temp_f;
		// $scope.weather = data.current_observation.weather;
		// $scope.icon = data.current_observation.icon_url;

		$scope.forecast = {
			location: data.current_observation.display_location.full,
			zip: data.current_observation.display_location.zip,
			temperature: data.current_observation.temp_f,
			weather: data.current_observation.weather,
			icon: data.current_observation.icon_url
		};
	});
	$scope.search = function(){
		console.log($scope.forecast.location);
		return $http.get('http://api.wunderground.com/api/' + apiKey + '/geolookup/conditions/q/IA/' + $scope.forecast.zip + '.json')
		.success(function(data){
			console.log('get request');
			// return data;
			$scope.forecast = {
				location: data.current_observation.display_location.full,
				zip: data.current_observation.display_location.zip,
				temperature: data.current_observation.temp_f,
				weather: data.current_observation.weather,
				icon: data.current_observation.icon_url
			};
		})
		.error(function(err){
			console.log('get failed');
			return err;
		});

	};
}]);