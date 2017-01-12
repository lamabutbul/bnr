'use strict';

angular.module('bnrApp.auth.users', [
    'ui.router',
    'translate',
    'bnrApp.auth.roles',
])
.config(['$stateProvider', function($stateProvider){
    $stateProvider
        .state('auth.users', {
            url: '/users',
            template: `<users></users>`,
        })
    ;
}]);
