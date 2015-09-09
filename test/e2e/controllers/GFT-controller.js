//
// test/e2e/controllers/controllersSpec.js
//
describe("E2E: Testing GFT", function () {

    beforeEach(function () {
        browser().navigateTo('/');
    });

    it('should have a working GFT page ', function () {
        browser().navigateTo('#/GFT');
        expect(browser().location().path()).toBe("/GFT");
        expect(element('[class="lead"]').html()).toContain('GFT');
    });

});
