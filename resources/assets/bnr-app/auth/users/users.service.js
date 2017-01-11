'use strict';

angular.module('bnrApp.auth.users').service('UsersService', ['$store', function($store){
    return $store('user')
        .belongsTo('userRole', 'user_role')
        .timestamps(true)
    ;
}]);
