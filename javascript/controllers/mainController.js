app.controller('mainController', ['$scope', 'forecast', function($scope, forecast){
	forecast.success(function(data){
		$scope.forecast = data;
	});
}])