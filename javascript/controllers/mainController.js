app.controller('mainController', ['$scope', 'forecast', '$http', function($scope, forecast, $http){
	forecast.success(function(data){
		$scope.forecast = {
			location: data.current_observation.display_location.full,
			zip: data.current_observation.display_location.zip,
			temperature: data.current_observation.temp_f,
			weather: data.current_observation.weather,
			icon: data.current_observation.icon_url,
			today:
				{
					day: 'Today',
					temperature: data.current_observation.temp_f,
					weather: data.current_observation.weather,
					icon: data.current_observation.icon_url,
				},
			days: [
				{
					day: data.forecast.simpleforecast.forecastday[1].date.weekday,
					temperature: data.forecast.simpleforecast.forecastday[1].high.fahrenheit,
					weather: data.forecast.simpleforecast.forecastday[1].conditions,
					icon: data.forecast.simpleforecast.forecastday[1].icon_url,
				},
				{
					day: data.forecast.simpleforecast.forecastday[2].date.weekday,
					temperature: data.forecast.simpleforecast.forecastday[2].high.fahrenheit,
					weather: data.forecast.simpleforecast.forecastday[2].conditions,
					icon: data.forecast.simpleforecast.forecastday[2].icon_url,
				},
				{
					day: data.forecast.simpleforecast.forecastday[3].date.weekday,
					temperature: data.forecast.simpleforecast.forecastday[3].high.fahrenheit,
					weather: data.forecast.simpleforecast.forecastday[3].conditions,
					icon: data.forecast.simpleforecast.forecastday[3].icon_url,
				},
			]
		};
	});
	$scope.search = function(){
		return $http.get('http://api.wunderground.com/api/' + apiKey + '/geolookup/forecast/conditions/q/IA/' + $scope.forecast.zip + '.json')
		forecast.success(function(data){
			// return data;
			$scope.forecast = {
				location: data.current_observation.display_location.full,
				zip: data.current_observation.display_location.zip,
				temperature: data.current_observation.temp_f,
				weather: data.current_observation.weather,
				icon: data.current_observation.icon_url,
				data:[
					{
						day: 'Today',
						temperature: data.current_observation.temp_f,
						weather: data.current_observation.weather,
						icon: data.current_observation.icon_url,
					},
					{
						day: data.forecast.simpleforecast.forecastday[1].date.weekday,
						temperature: data.forecast.simpleforecast.forecastday[1].high.fahrenheit,
						weather: data.forecast.simpleforecast.forecastday[1].conditions,
						icon: data.forecast.simpleforecast.forecastday[1].icon_url,
					},
					{
						day: data.forecast.simpleforecast.forecastday[2].date.weekday,
						temperature: data.forecast.simpleforecast.forecastday[2].high.fahrenheit,
						weather: data.forecast.simpleforecast.forecastday[2].conditions,
						icon: data.forecast.simpleforecast.forecastday[2].icon_url,
					},
					{
						day: data.forecast.simpleforecast.forecastday[3].date.weekday,
						temperature: data.forecast.simpleforecast.forecastday[3].high.fahrenheit,
						weather: data.forecast.simpleforecast.forecastday[3].conditions,
						icon: data.forecast.simpleforecast.forecastday[3].icon_url,
					},
				]
			};
		})
		.error(function(err){
			console.log('get failed');
			return err;
		});

	};
}]);