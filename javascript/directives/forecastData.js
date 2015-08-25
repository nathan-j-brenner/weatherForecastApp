app.directive('forecastData', function(){
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'javascript/directives/forecastData.html'
  };
});