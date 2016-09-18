angular
  .module('booksApp', ['ngRoute'])
  .controller('BooksIndexController', BooksIndexController)
  .config(config);


function BooksIndexController ($http) {
  var vm = this;

  vm.books = [
    { name: 'HP1', authorName: 'J.K.'

    }, 
    {name: 'HP2', authorName: 'J.K. Rowling'},
    { name: 'HP3', authorName: 'J.K.'

    }, 
    {name: 'HP3', authorName: 'J.K. Rowling'}
    ]

}


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



