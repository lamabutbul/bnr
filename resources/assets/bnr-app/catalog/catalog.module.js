'use strict';

angular.module('bnrApp.catalog', [])
    .config(['$stateProvider', function($stateProvider){
        $stateProvider
            .state('catalog', {
                url: '/',
                template: `<catalog></catalog>`,
            })
        ;
    }])
;
