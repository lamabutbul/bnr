'use strict';

angular.module('translate').directive('translate', ['$translate', function($translate){
    return {
        restrict: 'A',
        link: function($scope, $element, $attrs){
            $element.html($translate($attrs.translate));
        }
    };
}]);
