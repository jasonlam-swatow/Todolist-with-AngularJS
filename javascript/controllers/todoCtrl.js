var app = angular.module('TodoApp', []);

/*
 * 程式的主控制器，透過TodoStorage服務訪問或維護model，
 * 並綁定model與模板，以及提供事件處理器
 */
app.controller('TodoCtrl', ['$scope', 'TodoStorage', function ($scope, TodoStorage) {
	
	$scope.todos = TodoStorage.getItem('todos') || [];
	
	$scope.addTodo = function() {
		
		if ($scope.newTodo !== '') {
			$scope.todos.push({ text: $scope.newTodo, completed: false });
			$scope.newTodo = '';
			TodoStorage.setItem('todos', $scope.todos);
		}

	};

	$scope.toggleCompleted = function(index) {

		index.completed = !index.completed;
		
		TodoStorage.updateItem('todos', $scope.todos);

	}

	$scope.removeTodo = function(index) {
		
		$scope.todos.splice(index, 1);
		
		TodoStorage.removeItem('todos');

	};
}]);