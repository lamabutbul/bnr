'use strict';

angular.module('bnrApp.auth.roles', [
    'ui.router',
])
.config(['$stateProvider', function($stateProvider){
    $stateProvider
        .state('auth.roles', {
            url: '/roles',
            template: `<roles></roles>`,
        })
    ;
}]);
