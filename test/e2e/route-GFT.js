/*jshint node:true */
'use strict';

describe("E2E: Testing Routes GFT", function () {

    it('should have a working /GFT route', function () {
        browser().navigateTo('#/GFT');
        expect(browser().location().path()).toBe("/GFT");
    });

});
