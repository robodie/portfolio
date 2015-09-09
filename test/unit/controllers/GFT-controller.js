'use strict';

describe("Unit: Testing GFTController", function () {

    beforeEach(angular.mock.module('App.Controllers'));

    it('should have a properly working GFTController controller', angular.mock.inject(function ($rootScope, $controller) {

        var scope = $rootScope.$new();
        $controller('GFTController', {
            $scope: scope
        });

        expect(scope.name).toEqual('GFT');
    }));

});
