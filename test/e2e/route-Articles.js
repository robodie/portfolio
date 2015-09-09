/*jshint node:true */
'use strict';

describe("E2E: Testing Routes Articles", function () {

    it('should have a working /Articles route', function () {
        browser().navigateTo('#/Articles');
        expect(browser().location().path()).toBe("/Articles");
    });

});
