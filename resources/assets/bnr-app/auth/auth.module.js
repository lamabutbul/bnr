'use strict';

angular.module('bnrApp.auth', [
    'ui.router',
    'translate',
    'bnrApp.auth.users',
    'bnrApp.auth.roles',
])
.config(['$stateProvider', function($stateProvider){
    $stateProvider
        .state('auth', {
            url: '/auth',
            template: `<auth></auth>`,
        })
    ;
}]);
