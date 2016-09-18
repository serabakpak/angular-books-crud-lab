angular
  .module('booksApp', ['ngRoute'])  
  .config(config);

console.log('a');

config.$inject = ['$routeProvider', '$locationProvider'];
function config( $routeProvider, $locationProvider ) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/templates/books.html',
      controller: 'BooksIndexController',
      controllerAs: 'booksIndexCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  })
}



