//
// test/e2e/controllers/controllersSpec.js
//
describe("E2E: Testing Articles", function () {

    beforeEach(function () {
        browser().navigateTo('/');
    });

    it('should have a working Articles page ', function () {
        browser().navigateTo('#/Articles');
        expect(browser().location().path()).toBe("/Articles");
        expect(element('[class="col-lg-12"]').html()).toContain('Articles');
    });

});
