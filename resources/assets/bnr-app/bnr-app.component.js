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
