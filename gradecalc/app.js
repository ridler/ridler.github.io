(function() {
	Category = function() {
		this.weight = null;
		this.score = null;
	};
	var app = angular.module('gradecalc', []);
	app.controller('main', ['$scope', function($scope) {
		$scope.categories = [new Category()];
		$scope.addCategory = function() {
			$scope.categories.push(new Category());
			$scope.updateSums();
		};
		$scope.calculateFinal = function() {
			$scope.updateSums();
			$scope.finalGrade = 100*($scope.earnedPoints/$scope.totalPoints);
		};
		$scope.updateSums = function() {
			$scope.earnedPoints = $scope.categories.reduce(function(p, c) { return p + c.score }, 0);
			$scope.totalPoints = $scope.categories.reduce(function(p, c) { return p + c.weight }, 0);
		};
	}]);
})();