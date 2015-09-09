'use strict';

describe("Unit: Testing ArticlesController", function () {

    beforeEach(angular.mock.module('App.Controllers'));
    beforeEach(angular.mock.module('restangular'));
    beforeEach(angular.mock.module("ui.bootstrap"));

    it('should have a properly working ArticlesController controller', angular.mock.inject(function ($rootScope, $controller) {

        var scope = $rootScope.$new();
        $controller('ArticlesController', {
            $scope: scope
        });

        expect(scope.name).toEqual('Articles');
    }));

});
