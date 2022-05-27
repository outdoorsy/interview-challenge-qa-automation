describe('Checkout pages', function () {
    before (async function () {
        let url = 'https://checkout-staging.wheelbasepro.com/r/reserve?owner_id=28880';
        page = await browser.newPage();
        await page.goto(url);
      });
    
      after (async function () {
        await page.close();
    })
    
    // should have a page title "Martin RV Rentals.com"
    it('should have a page title', async function () {
      // ...
    });
  
    // Select dates on the calendar and ensure they are applied
    it('should be able to select dates', async function () {
      // ...
    });
  
    // Click the "More" menu button and perform a search using the keyword search and ensure the term is applied
    it('should be able to do a keyword search', async function () {
      // ...
    });

    // Select a vehicle from the search results 
    // Ensure transition to vehicle page is successful
    // Ensure dates are pre-selected on calendar on vehicle page
    it('should be able select a vehicle listing', async function () {
      // ...
    });

    // Select a vehicle image in the header and ensure page transitions to photos page
    it('should be able to select and view vehicle in image gallery', async function () {
      // ...
    });

    // Close the modal on the image popup and ensure page transitions back to vehicle listing page
    it('should be able to close image gallery popup', async function () {
      // ...
    });
});
