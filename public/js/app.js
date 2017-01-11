'use strict';

angular.module('bnrApp', [
    'ui.router',
    'bnrApp.auth',
    'bnrApp.catalog',
])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
}]);

'use strict';

angular.module('bnrApp.auth', [
    'ui.router',
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
    template: `<h2>Roles</h2>

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
    template: `<h2>Users</h2>

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

angular.module('bnrApp').run();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yZXNvdXJjZXMvYXNzZXRzL2Juci1hcHAvYm5yLWFwcC5tb2R1bGUuanMiLCIvcmVzb3VyY2VzL2Fzc2V0cy9ibnItYXBwL2F1dGgvYXV0aC5tb2R1bGUuanMiLCIvcmVzb3VyY2VzL2Fzc2V0cy9ibnItYXBwL2NhdGFsb2cvY2F0YWxvZy5tb2R1bGUuanMiLCIvcmVzb3VyY2VzL2Fzc2V0cy9ibnItYXBwL2F1dGgvcm9sZXMvcm9sZXMubW9kdWxlLmpzIiwiL3Jlc291cmNlcy9hc3NldHMvYm5yLWFwcC9hdXRoL3VzZXJzL3VzZXJzLm1vZHVsZS5qcyIsIi9yZXNvdXJjZXMvYXNzZXRzL2Juci1hcHAvYXV0aC9yb2xlcy9yb2xlcy5zZXJ2aWNlLmpzIiwiL3Jlc291cmNlcy9hc3NldHMvYm5yLWFwcC9hdXRoL3VzZXJzL3VzZXJzLnNlcnZpY2UuanMiLCIvcmVzb3VyY2VzL2Fzc2V0cy9ibnItYXBwL2Juci1hcHAuY29tcG9uZW50LmpzIiwiL3Jlc291cmNlcy9hc3NldHMvYm5yLWFwcC9hdXRoL2F1dGguY29tcG9uZW50LmpzIiwiL3Jlc291cmNlcy9hc3NldHMvYm5yLWFwcC9jYXRhbG9nL2NhdGFsb2cuY29tcG9uZW50LmpzIiwiL3Jlc291cmNlcy9hc3NldHMvYm5yLWFwcC9hdXRoL3JvbGVzL3JvbGVzLmNvbXBvbmVudC5qcyIsIi9yZXNvdXJjZXMvYXNzZXRzL2Juci1hcHAvYXV0aC91c2Vycy91c2Vycy5jb21wb25lbnQuanMiLCIvcmVzb3VyY2VzL2Fzc2V0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkRBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ2JuckFwcCcsIFtcbiAgICAndWkucm91dGVyJyxcbiAgICAnYm5yQXBwLmF1dGgnLFxuICAgICdibnJBcHAuY2F0YWxvZycsXG5dKVxuLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlcicsIGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpe1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbn1dKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ2JuckFwcC5hdXRoJywgW1xuICAgICd1aS5yb3V0ZXInLFxuICAgICdibnJBcHAuYXV0aC51c2VycycsXG4gICAgJ2JuckFwcC5hdXRoLnJvbGVzJyxcbl0pXG4uY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbigkc3RhdGVQcm92aWRlcil7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgLnN0YXRlKCdhdXRoJywge1xuICAgICAgICAgICAgdXJsOiAnL2F1dGgnLFxuICAgICAgICAgICAgdGVtcGxhdGU6IGA8YXV0aD48L2F1dGg+YCxcbiAgICAgICAgfSlcbiAgICA7XG59XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCdibnJBcHAuY2F0YWxvZycsIFtdKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyKXtcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnY2F0YWxvZycsIHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogYDxjYXRhbG9nPjwvY2F0YWxvZz5gLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1dKVxuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgnYm5yQXBwLmF1dGgucm9sZXMnLCBbXG4gICAgJ3VpLnJvdXRlcicsXG5dKVxuLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIpe1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgIC5zdGF0ZSgnYXV0aC5yb2xlcycsIHtcbiAgICAgICAgICAgIHVybDogJy9yb2xlcycsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogYDxyb2xlcz48L3JvbGVzPmAsXG4gICAgICAgIH0pXG4gICAgO1xufV0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgnYm5yQXBwLmF1dGgudXNlcnMnLCBbXG4gICAgJ3VpLnJvdXRlcicsXG4gICAgJ2JuckFwcC5hdXRoLnJvbGVzJyxcbl0pXG4uY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbigkc3RhdGVQcm92aWRlcil7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgLnN0YXRlKCdhdXRoLnVzZXJzJywge1xuICAgICAgICAgICAgdXJsOiAnL3VzZXJzJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiBgPHVzZXJzPjwvdXNlcnM+YCxcbiAgICAgICAgfSlcbiAgICA7XG59XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCdibnJBcHAuYXV0aC5yb2xlcycpLnNlcnZpY2UoJ1JvbGVzU2VydmljZScsIFsnJHN0b3JlJywgZnVuY3Rpb24oJHN0b3JlKXtcbiAgICByZXR1cm4gJHN0b3JlKCdyb2xlJylcbiAgICAgICAgLnRpbWVzdGFtcHModHJ1ZSlcbiAgICA7XG59XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCdibnJBcHAuYXV0aC51c2VycycpLnNlcnZpY2UoJ1VzZXJzU2VydmljZScsIFsnJHN0b3JlJywgZnVuY3Rpb24oJHN0b3JlKXtcbiAgICByZXR1cm4gJHN0b3JlKCd1c2VyJylcbiAgICAgICAgLmJlbG9uZ3NUbygndXNlclJvbGUnLCAndXNlcl9yb2xlJylcbiAgICAgICAgLnRpbWVzdGFtcHModHJ1ZSlcbiAgICA7XG59XSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCdibnJBcHAnKS5jb21wb25lbnQoJ2JuckFwcCcsIHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aDE+QiZSIEFwcDwvaDE+XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpIHVpLXNyZWYtYWN0aXZlPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIHVpLXNyZWY9XCJjYXRhbG9nXCI+Q2F0YWxvZzwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSB1aS1zcmVmLWFjdGl2ZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSB1aS1zcmVmPVwiYXV0aFwiPkF1dGg8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8dWktdmlldz48L3VpLXZpZXc+XG4gICAgYCxcbiAgICBjb250cm9sbGVyOiBbQXBwQ29tcG9uZW50XSxcbn0pO1xuXG5mdW5jdGlvbiBBcHBDb21wb25lbnQoKSB7XG4gICAgXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCdibnJBcHAuYXV0aCcpLmNvbXBvbmVudCgnYXV0aCcsIHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGkgdWktc3JlZi1hY3RpdmU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICA8YSB1aS1zcmVmPVwiYXV0aC51c2Vyc1wiIHRyYW5zbGF0ZT1cImF1dGgudXNlcnNcIj48L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIHVpLXNyZWYtYWN0aXZlPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgPGEgdWktc3JlZj1cImF1dGgucm9sZXNcIiB0cmFuc2xhdGU9XCJhdXRoLnJvbGVzXCI+PC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHVpLXZpZXc+PC91aS12aWV3PlxuICAgIGAsXG4gICAgY29udHJvbGxlcjogW0F1dGhDb21wb25lbnRdLFxuICAgIGNvbnRyb2xsZXJBczogJ0F1dGhDb250cm9sbGVyJyxcbn0pO1xuXG5mdW5jdGlvbiBBdXRoQ29tcG9uZW50KCkge1xuICAgIFxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgnYm5yQXBwLmNhdGFsb2cnKS5jb21wb25lbnQoJ2NhdGFsb2cnLCB7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGgyPkNhdGFsb2c8L2gyPlxuICAgIGAsXG4gICAgY29udHJvbGxlcjogW0NhdGFsb2dDb21wb25lbnRdLFxufSk7XG5cbmZ1bmN0aW9uIENhdGFsb2dDb21wb25lbnQoKSB7XG4gICAgXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCdibnJBcHAuYXV0aC5yb2xlcycpLmNvbXBvbmVudCgncm9sZXMnLCB7XG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vcm9sZXMudGVtcGxhdGUuaHRtbCcpLFxuICAgIGNvbnRyb2xsZXI6IFtSb2xlc0NvbXBvbmVudF0sXG4gICAgY29udHJvbGxlckFzOiAnUm9sZXNDb250cm9sbGVyJyxcbn0pO1xuXG5mdW5jdGlvbiBSb2xlc0NvbXBvbmVudCgpIHtcbiAgICBcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ2JuckFwcC5hdXRoLnVzZXJzJykuY29tcG9uZW50KCd1c2VycycsIHtcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi91c2Vycy50ZW1wbGF0ZS5odG1sJyksXG4gICAgY29udHJvbGxlcjogW1VzZXJzQ29tcG9uZW50XSxcbiAgICBjb250cm9sbGVyQXM6ICdVc2Vyc0NvbnRyb2xsZXInLFxufSk7XG5cbmZ1bmN0aW9uIFVzZXJzQ29tcG9uZW50KCkge1xuICAgIFxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgnYm5yQXBwJykucnVuKCk7XG4iXX0=
