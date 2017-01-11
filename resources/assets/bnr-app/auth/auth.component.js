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
