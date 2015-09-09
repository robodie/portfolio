(function () {
    'use strict';
    angular.module('App.Controllers', []);
    angular.module('portfolioApp', [
        'ngGrid',
        'appverse.serverPush',
        'appverse.cache',
        'appverse.rest',
        'ngAnimate',
        'ui.bootstrap',
        'angularRipple',
        'ui.select',
        'ngSanitize',
        'rzModule',
        'rt.resize',
        'chart.js',
        'appverse.router',
        'App.Controllers',
        'appverse.detection',
        'appverse.logging',
        'appverse.performance',
        'appverse.translate',
        'appverse'
    ]).run(function ($log) {
        $log.debug('portfolioApp run');
    });
    AppInit.setConfig({
        environment: {
            'REST_CONFIG': {
                'BaseUrl': '/api',
                'RequestSuffix': ''
            },
            'SERVERPUSH_CONFIG': { 'BaseUrl': 'http://127.0.0.1:3000' }
        },
        appverseMobile: {},
        mobileBrowser: {}
    });
}());
