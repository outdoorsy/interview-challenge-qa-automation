describe('Open source CMS test', function () {
    const username = 'opensourcecms';
    const password = 'opensourcecms';

    before (async function () {
        page = await browser.newPage();
        await page.goto('https://s1.demo.opensourcecms.com/cms_madesimple/admin/login.php');
      });
    
      after (async function () {
        await page.close();
    })
    
    it('should have the correct page title', async function () {
      expect(await page.title()).to.eql('Login to CMS Made Simple™ - CMS Made Simple');
    });
  
    it('should see Dashboard after login', async function () {
      // add your code here
    });
  
    it('should be able to add New Content as Content manager', async function () {
      // add your code here
    });
});
