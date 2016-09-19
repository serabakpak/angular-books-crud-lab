angular
	.module('booksApp')
	.controller('BooksShowController', BooksShowController);

BooksShowController.$inject = ['$http', '$routeParams', '$location'];
console.log('b');

function BooksShowController($http, $routeParams, $location) {
	var vm = this;
	var id = $routeParams.id;
	console.log('c');
	console.log('$routeParams:',$routeParams);
	$http({
		method: 'GET',
		url: 'https://super-crud.herokuapp.com/books/' + id
	}).then(successCallback, errorCallback);

	vm.editBook = function(book) {
		console.log('book to edit: ', book);
		$http({
			method: 'PUT',
			url: 'https://super-crud.herokuapp.com/books/' + id,
			data: book
		}).then(editSuccess, editError);
	}

	vm.deleteBook = function(book) {
		console.log('book to delete: ', book);
		$http({
			method: 'DELETE',
			url: 'https://super-crud.herokuapp.com/books/' + id,
		}).then(deleteSuccess, deleteError);
	}
		
	function successCallback (response) {
		console.log('successCallback in BooksShowController', response);
		vm.book = response.data;
	}

	function errorCallback(error) {
		console.log('error GETTING ONE BOOK in BooksShowController: ', error);
	}

	function editSuccess(response) {
		console.log('editSuccess response: ',response);
		$location.path('/');

	}

	function editError(error) {
		console.log('error UPDATING ONE BOOK in BooksShowController: ', error);
	}

	function deleteSuccess(response) {
		console.log('deleteSuccess response: ', response);
		$location.path('/');

	}
	function deleteError(error) {
		console.log('error DELETING ONE BOOK in BooksShowController: ', error);
	}
}


 