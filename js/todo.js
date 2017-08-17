angular.module('todoApp', [])
  .controller('TodoListController', function($scope) {

    $scope.appTitle = "Awesome ToDo App";
  	$scope.saved = localStorage.getItem('todoApp');
  	$scope.todoApp = (localStorage.getItem('todoApp')!==null) ? JSON.parse($scope.saved) : [];
  	localStorage.setItem('todoApp', JSON.stringify($scope.todoApp));

  	$scope.addTodo = function() {
  		$scope.todoApp.push({
  			text: $scope.todoText,
  			done: false
  		});
  		$scope.todoText = '';
  		localStorage.setItem('todoApp', JSON.stringify($scope.todoApp));
  	};

  	$scope.remaining = function() {
  		var count = 0;
  		angular.forEach($scope.todoApp, function(todo){
  			count += !todo.done ? 0 : 1;
  		});
  		return count;
  	};

  	$scope.remove = function() {
  		var oldtodoApp = $scope.todoApp;
  		$scope.todoApp = [];
  		angular.forEach(oldtodoApp, function(todo){
  			if (!todo.done)
  				$scope.todoApp.push(todo);
  		});
  		localStorage.setItem('todoApp', JSON.stringify($scope.todoApp));
  	};
});
