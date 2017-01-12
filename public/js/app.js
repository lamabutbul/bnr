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

'use strict';

angular.module('translate', []);

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

'use strict';

angular.module('bnrApp.auth.roles', [
    'ui.router',
    'translate',
])
.config(['$stateProvider', function($stateProvider){
    $stateProvider
        .state('auth.roles', {
            url: '/roles',
            template: `<roles></roles>`,
        })
    ;
}]);

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

'use strict';

angular.module('translate').service('$translate', [function(){
    function $translate(text) {
        return text;
    }

    return $translate;
}]);

'use strict';

angular.module('bnrApp.auth.roles').service('RolesService', ['$store', function($store){
    return $store('role')
        .timestamps(true)
    ;
}]);

'use strict';

angular.module('bnrApp.auth.users').service('UsersService', ['$store', function($store){
    return $store('user')
        .belongsTo('userRole', 'user_role')
        .timestamps(true)
    ;
}]);

'use strict';

angular.module('bnrApp').component('bnrApp', {
    template: `
        <h1>B&R App</h1>
        <nav>
            <ul>
                <li ui-sref-active="active">
                    <a ui-sref="catalog">Catalog</a>
                </li>
                <li ui-sref-active="active">
                    <a ui-sref="auth">Auth</a>
                </li>
            </ul>
        </nav>
        <ui-view></ui-view>
    `,
    controller: [AppComponent],
});

function AppComponent() {
    
}

'use strict';

angular.module('bnrApp.auth').component('auth', {
    template: `
        <h2>Auth</h2>
        <ul>
            <li ui-sref-active="active">
                <a ui-sref="auth.users" translate="auth.users"></a>
            </li>
            <li ui-sref-active="active">
                <a ui-sref="auth.roles" translate="auth.roles"></a>
            </li>
        </ul>
        <ui-view></ui-view>
    `,
    controller: [AuthComponent],
    controllerAs: 'AuthController',
});

function AuthComponent() {
    
}

'use strict';

angular.module('bnrApp.catalog').component('catalog', {
    template: `
        <h2>Catalog</h2>
    `,
    controller: [CatalogComponent],
});

function CatalogComponent() {
    
}

'use strict';

angular.module('bnrApp.auth.roles').component('roles', {
    template: `<h3>Roles</h3>

<div table="RolesController.roles" table-service="RolesService">
    <table>
        <thead>
            <tr>
                <th table-select-all></th>
                <th>#</th>
                <th table-sort="name"><span translate="role.name"></span></th>
                <th table-sort="role"><span translate="role.role"></span></th>
                <th table-sort="description"><span translate="role.description"></span></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr ng-repeat="role in RolesController.roles">
                <td table-select="role.id"></td>
                <td table-row-number></td>
                <td>{{ :: role.name }}</td>
                <td>{{ :: role.role }}</td>
                <td>{{ :: role.description }}</td>
                <td>
                    <ul>
                        <li>
                            <i class="fa fa-pencil"></i>
                            <span translate="role.edit"></span>
                        </li>
                        <li>
                            <i class="fa fa-delete"></i>
                            <span translate="role.delete"></span>
                        </li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
    <div table-pagination></div>
</div>
`,
    controller: [RolesComponent],
    controllerAs: 'RolesController',
});

function RolesComponent() {
    
}

'use strict';

angular.module('bnrApp.auth.users').component('users', {
    template: `<h3>Users</h3>

<div table="UsersController.users" table-service="UsersService">
    <table>
        <thead>
            <tr>
                <th table-select-all></th>
                <th>#</th>
                <th table-sort="name"><span translate="user.name"></span></th>
                <th table-sort="username"><span translate="user.username"></span></th>
                <th table-sort="email"><span translate="user.email"></span></th>
                <th table-sort="role_id"><span translate="user.role"></span></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr ng-repeat="user in UsersController.users">
                <td table-select="user.id"></td>
                <td table-row-number></td>
                <td>{{ :: user.name }}</td>
                <td>{{ :: user.username }}</td>
                <td>{{ :: user.email }}</td>
                <td>{{ :: user.role.name }}</td>
                <td>
                    <ul>
                        <li>
                            <i class="fa fa-pencil"></i>
                            <span translate="user.edit"></span>
                        </li>
                        <li>
                            <i class="fa fa-delete"></i>
                            <span translate="user.delete"></span>
                        </li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
    <div table-pagination></div>
</div>
`,
    controller: [UsersComponent],
    controllerAs: 'UsersController',
});

function UsersComponent() {
    
}

'use strict';

angular.module('translate').directive('translate', ['$translate', function($translate){
    return {
        restrict: 'A',
        link: function($scope, $element, $attrs){
            $element.html($translate($attrs.translate));
        }
    };
}]);

'use strict';

angular.module('bnrApp').run();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yZXNvdXJjZXMvYXNzZXRzL2Juci1hcHAvYm5yLWFwcC5tb2R1bGUuanMiLCIvcmVzb3VyY2VzL2Fzc2V0cy90cmFuc2xhdGUvdHJhbnNsYXRlLm1vZHVsZS5qcyIsIi9yZXNvdXJjZXMvYXNzZXRzL2Juci1hcHAvYXV0aC9hdXRoLm1vZHVsZS5qcyIsIi9yZXNvdXJjZXMvYXNzZXRzL2Juci1hcHAvY2F0YWxvZy9jYXRhbG9nLm1vZHVsZS5qcyIsIi9yZXNvdXJjZXMvYXNzZXRzL2Juci1hcHAvYXV0aC9yb2xlcy9yb2xlcy5tb2R1bGUuanMiLCIvcmVzb3VyY2VzL2Fzc2V0cy9ibnItYXBwL2F1dGgvdXNlcnMvdXNlcnMubW9kdWxlLmpzIiwiL3Jlc291cmNlcy9hc3NldHMvdHJhbnNsYXRlL3RyYW5zbGF0ZS5zZXJ2aWNlLmpzIiwiL3Jlc291cmNlcy9hc3NldHMvYm5yLWFwcC9hdXRoL3JvbGVzL3JvbGVzLnNlcnZpY2UuanMiLCIvcmVzb3VyY2VzL2Fzc2V0cy9ibnItYXBwL2F1dGgvdXNlcnMvdXNlcnMuc2VydmljZS5qcyIsIi9yZXNvdXJjZXMvYXNzZXRzL2Juci1hcHAvYm5yLWFwcC5jb21wb25lbnQuanMiLCIvcmVzb3VyY2VzL2Fzc2V0cy9ibnItYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuanMiLCIvcmVzb3VyY2VzL2Fzc2V0cy9ibnItYXBwL2NhdGFsb2cvY2F0YWxvZy5jb21wb25lbnQuanMiLCIvcmVzb3VyY2VzL2Fzc2V0cy9ibnItYXBwL2F1dGgvcm9sZXMvcm9sZXMuY29tcG9uZW50LmpzIiwiL3Jlc291cmNlcy9hc3NldHMvYm5yLWFwcC9hdXRoL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5qcyIsIi9yZXNvdXJjZXMvYXNzZXRzL3RyYW5zbGF0ZS90cmFuc2xhdGUuZGlyZWN0aXZlLmpzIiwiL3Jlc291cmNlcy9hc3NldHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgnYm5yQXBwJywgW1xuICAgICd1aS5yb3V0ZXInLFxuICAgICd0cmFuc2xhdGUnLFxuICAgICdibnJBcHAuYXV0aCcsXG4gICAgJ2JuckFwcC5jYXRhbG9nJyxcbl0pXG4uY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCAnJHVybFJvdXRlclByb3ZpZGVyJywgZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcil7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xufV0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgndHJhbnNsYXRlJywgW10pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgnYm5yQXBwLmF1dGgnLCBbXG4gICAgJ3VpLnJvdXRlcicsXG4gICAgJ3RyYW5zbGF0ZScsXG4gICAgJ2JuckFwcC5hdXRoLnVzZXJzJyxcbiAgICAnYm5yQXBwLmF1dGgucm9sZXMnLFxuXSlcbi5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyKXtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAuc3RhdGUoJ2F1dGgnLCB7XG4gICAgICAgICAgICB1cmw6ICcvYXV0aCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogYDxhdXRoPjwvYXV0aD5gLFxuICAgICAgICB9KVxuICAgIDtcbn1dKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ2JuckFwcC5jYXRhbG9nJywgW10pXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIpe1xuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjYXRhbG9nJywge1xuICAgICAgICAgICAgICAgIHVybDogJy8nLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBgPGNhdGFsb2c+PC9jYXRhbG9nPmAsXG4gICAgICAgICAgICB9KVxuICAgICAgICA7XG4gICAgfV0pXG47XG4iLCIndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCdibnJBcHAuYXV0aC5yb2xlcycsIFtcbiAgICAndWkucm91dGVyJyxcbiAgICAndHJhbnNsYXRlJyxcbl0pXG4uY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbigkc3RhdGVQcm92aWRlcil7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgLnN0YXRlKCdhdXRoLnJvbGVzJywge1xuICAgICAgICAgICAgdXJsOiAnL3JvbGVzJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiBgPHJvbGVzPjwvcm9sZXM+YCxcbiAgICAgICAgfSlcbiAgICA7XG59XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCdibnJBcHAuYXV0aC51c2VycycsIFtcbiAgICAndWkucm91dGVyJyxcbiAgICAndHJhbnNsYXRlJyxcbiAgICAnYm5yQXBwLmF1dGgucm9sZXMnLFxuXSlcbi5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyKXtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAuc3RhdGUoJ2F1dGgudXNlcnMnLCB7XG4gICAgICAgICAgICB1cmw6ICcvdXNlcnMnLFxuICAgICAgICAgICAgdGVtcGxhdGU6IGA8dXNlcnM+PC91c2Vycz5gLFxuICAgICAgICB9KVxuICAgIDtcbn1dKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ3RyYW5zbGF0ZScpLnNlcnZpY2UoJyR0cmFuc2xhdGUnLCBbZnVuY3Rpb24oKXtcbiAgICBmdW5jdGlvbiAkdHJhbnNsYXRlKHRleHQpIHtcbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuICR0cmFuc2xhdGU7XG59XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCdibnJBcHAuYXV0aC5yb2xlcycpLnNlcnZpY2UoJ1JvbGVzU2VydmljZScsIFsnJHN0b3JlJywgZnVuY3Rpb24oJHN0b3JlKXtcbiAgICByZXR1cm4gJHN0b3JlKCdyb2xlJylcbiAgICAgICAgLnRpbWVzdGFtcHModHJ1ZSlcbiAgICA7XG59XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCdibnJBcHAuYXV0aC51c2VycycpLnNlcnZpY2UoJ1VzZXJzU2VydmljZScsIFsnJHN0b3JlJywgZnVuY3Rpb24oJHN0b3JlKXtcbiAgICByZXR1cm4gJHN0b3JlKCd1c2VyJylcbiAgICAgICAgLmJlbG9uZ3NUbygndXNlclJvbGUnLCAndXNlcl9yb2xlJylcbiAgICAgICAgLnRpbWVzdGFtcHModHJ1ZSlcbiAgICA7XG59XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCdibnJBcHAnKS5jb21wb25lbnQoJ2JuckFwcCcsIHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aDE+QiZSIEFwcDwvaDE+XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpIHVpLXNyZWYtYWN0aXZlPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIHVpLXNyZWY9XCJjYXRhbG9nXCI+Q2F0YWxvZzwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSB1aS1zcmVmLWFjdGl2ZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSB1aS1zcmVmPVwiYXV0aFwiPkF1dGg8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8dWktdmlldz48L3VpLXZpZXc+XG4gICAgYCxcbiAgICBjb250cm9sbGVyOiBbQXBwQ29tcG9uZW50XSxcbn0pO1xuXG5mdW5jdGlvbiBBcHBDb21wb25lbnQoKSB7XG4gICAgXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCdibnJBcHAuYXV0aCcpLmNvbXBvbmVudCgnYXV0aCcsIHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aDI+QXV0aDwvaDI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaSB1aS1zcmVmLWFjdGl2ZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxhIHVpLXNyZWY9XCJhdXRoLnVzZXJzXCIgdHJhbnNsYXRlPVwiYXV0aC51c2Vyc1wiPjwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgdWktc3JlZi1hY3RpdmU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICA8YSB1aS1zcmVmPVwiYXV0aC5yb2xlc1wiIHRyYW5zbGF0ZT1cImF1dGgucm9sZXNcIj48L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8dWktdmlldz48L3VpLXZpZXc+XG4gICAgYCxcbiAgICBjb250cm9sbGVyOiBbQXV0aENvbXBvbmVudF0sXG4gICAgY29udHJvbGxlckFzOiAnQXV0aENvbnRyb2xsZXInLFxufSk7XG5cbmZ1bmN0aW9uIEF1dGhDb21wb25lbnQoKSB7XG4gICAgXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCdibnJBcHAuY2F0YWxvZycpLmNvbXBvbmVudCgnY2F0YWxvZycsIHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aDI+Q2F0YWxvZzwvaDI+XG4gICAgYCxcbiAgICBjb250cm9sbGVyOiBbQ2F0YWxvZ0NvbXBvbmVudF0sXG59KTtcblxuZnVuY3Rpb24gQ2F0YWxvZ0NvbXBvbmVudCgpIHtcbiAgICBcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ2JuckFwcC5hdXRoLnJvbGVzJykuY29tcG9uZW50KCdyb2xlcycsIHtcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9yb2xlcy50ZW1wbGF0ZS5odG1sJyksXG4gICAgY29udHJvbGxlcjogW1JvbGVzQ29tcG9uZW50XSxcbiAgICBjb250cm9sbGVyQXM6ICdSb2xlc0NvbnRyb2xsZXInLFxufSk7XG5cbmZ1bmN0aW9uIFJvbGVzQ29tcG9uZW50KCkge1xuICAgIFxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgnYm5yQXBwLmF1dGgudXNlcnMnKS5jb21wb25lbnQoJ3VzZXJzJywge1xuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3VzZXJzLnRlbXBsYXRlLmh0bWwnKSxcbiAgICBjb250cm9sbGVyOiBbVXNlcnNDb21wb25lbnRdLFxuICAgIGNvbnRyb2xsZXJBczogJ1VzZXJzQ29udHJvbGxlcicsXG59KTtcblxuZnVuY3Rpb24gVXNlcnNDb21wb25lbnQoKSB7XG4gICAgXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCd0cmFuc2xhdGUnKS5kaXJlY3RpdmUoJ3RyYW5zbGF0ZScsIFsnJHRyYW5zbGF0ZScsIGZ1bmN0aW9uKCR0cmFuc2xhdGUpe1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycyl7XG4gICAgICAgICAgICAkZWxlbWVudC5odG1sKCR0cmFuc2xhdGUoJGF0dHJzLnRyYW5zbGF0ZSkpO1xuICAgICAgICB9XG4gICAgfTtcbn1dKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ2JuckFwcCcpLnJ1bigpO1xuIl19
