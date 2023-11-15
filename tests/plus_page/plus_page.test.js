require('dotenv').config();


describe('ID:2133 - Test suite validating page text for plus page', () => {
    let page;
    const testCaseID = {
        tc1:'ID:2133_TC1',
        tc2:'ID:2133_TC2'
    }
    const baseUrl = process.env.BASE_URL
    beforeAll(async () => {
        page = await browser.newPage();
        await page.goto(`${baseUrl}/plus`);
    });

    afterAll(async () => {
        await page.close();
    });

    test(testCaseID.tc1 + ' - Should contain the correct page title and header title', async () => {

        try {
            await page.waitForSelector('h1.text-center.lg\\:text-left.mt-12.mb-2.text-gray-950.relative')
            const expectPageTitle = 'iVisa Plus: Free Standard Processing of Unlimited Travel Docs'
            const expectHeaderTitle = 'Meet iVisa Plus'
            const expectTitleMessage = 'Enjoy free standard service fee for eVisas, Health Declarations and Embassy Registrations.'

            const pageTitle = await page.title();
            const headerTitle = await page.$eval('h1.text-center.lg\\:text-left.mt-12.mb-2.text-gray-950.relative', el => el.textContent);
            const titleMessage = await page.$eval('h3.text-center.lg\\:text-left.mb-12.lg\\:mb-6.font-normal.text-dark.text-base.lg\\:text-2xl', el => el.textContent.trim());
            expect(pageTitle).toBe(expectPageTitle);
            expect(headerTitle).toBe(expectHeaderTitle);
            expect(titleMessage).toBe(expectTitleMessage);
        } catch (error) {
            throw error;
        }
    });
    test(testCaseID.tc2 + ' - Should fail', async () => {
        try {
            testCaseID.tc2
            await page.waitForSelector('h3.text-center.lg\\:text-left.mb-12.lg\\:mb-6.font-normal.text-dark.text-base.lg\\:text-2xl')
            const titleMessage = await page.$eval('h3.text-center.lg\\:text-left.mb-12.lg\\:mb-6.font-normal.text-dark.text-base.lg\\:text-2xl', el => el.textContent.trim());
            expect(titleMessage).toBe('will fail');
            //screenshot capture - wip 11-14-2023
            // await page.waitForTimeout(2000)
            // await page.screenshot({ path: `./screenshots/test-${testCaseID.tc2}-${Date.now()}.png` });
        } catch (error) {
            // await page.waitForTimeout(2000)
            // // Capture screenshot on failure
            // await page.screenshot({ path: `./screenshots/failure-${testCaseID.tc2}-${Date.now()}.png` });
            throw error; // Re-throw the error to ensure the test is marked as failed
        }


    });

});
