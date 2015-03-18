var app = angular.module('TodoApp', []);

/*
 * 註冊一個服務，用以在本地上對待辦事項進行CRUD操作
 */
app.factory('TodoStorage', function() {

	var STORAGE_KEY = 'TodoApp',
		data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
	
	return {
		getItem: function(key) {
			return data[key];
		},

		setItem: function(key, value) {
			data[key] = value;
			localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
		},

		updateItem: function(key, value) {
			data[key] = value;
			localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
		},

		removeItem: function(key) {
			data[key] = '';
			localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
		}

	};

});


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