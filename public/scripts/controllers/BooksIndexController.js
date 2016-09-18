angular
	.module('booksApp')
	.controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject = ['$http'];
console.log('b');

function BooksIndexController($http) {
	var vm = this;

	$http({
		method: 'GET',
		url: 'https://super-crud.herokuapp.com/books'
	}).then(successCallback, errorCallback);

	function successCallback (response) {
		console.log(response);
		vm.books = response.data.books;
	}

	function errorCallback(error) {
		console.log('error GETTING books in BooksIndexController: ', error);
	}

}















