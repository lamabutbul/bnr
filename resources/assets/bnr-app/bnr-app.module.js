'use strict';

angular.module('bnrApp', [
    'ui.router',
    'translate',
    'bnrApp.auth',
    'bnrApp.catalog',
])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
}]);
