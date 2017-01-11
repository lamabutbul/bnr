'use strict';

angular.module('bnrApp.auth.roles').service('RolesService', ['$store', function($store){
    return $store('role')
        .timestamps(true)
    ;
}]);
