'use strict';

angular.module('bnrApp.auth.users').component('users', {
    template: require('./users.template.html'),
    controller: [UsersComponent],
    controllerAs: 'UsersController',
});

function UsersComponent() {
    
}
