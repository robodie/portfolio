'use strict';

angular.module('App.Controllers')

.controller('homeController',
    function ($log, $scope) {
        $log.debug('homeController loading');
        $scope.oneAtATime = true;
        $scope.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
        $scope.status2 = {
            isFirstOpen: true,
            isFirstDisabled: false
        };

    });
