# Coding Challenge

Thanks for applying for a QA automation role at Outdoorsy. We've put together this code challenge, which should take around 1-2 hours to complete.

## Functionality
The task is to develop UI tests in the preferred Javascript programming language. We have included files to create an initial suite with [Mocha](https://mochajs.org/), [Chai](http://chaijs.com/) and [Puppeteer](https://github.com/GoogleChrome/puppeteer).

Your application should be built around the provided `test/interview.spec.js`.

- [Visit checkout page](https://checkout-staging.wheelbasepro.com/r/reserve?owner_id=28880)
    - Check to make sure that the page has a title
- Select "Add dates" button and select dates on the calendar
    - Ensure the dates are applied and exist as query params
- Click the "More" menu button and perform a search using the keyword search
    - Ensure the term is applied and the query params are updated
- Select a vehicle from the search results
    - Ensure transition to vehicle page is successful
        - [Example page](https://checkout-staging.wheelbasepro.com/r/reserve/103823?owner_id=28880)
    - Ensure dates are pre-selected on calendar on vehicle page
- Select a vehicle image in the header
    - Ensure page transitions to photos page
        - [Example page](https://checkout-staging.wheelbasepro.com/r/reserve/103823/photos?owner_id=28880&image=909193)
- Close the image popup
    - Ensure page transitions back to vehicle listing page and the popup is no longer showing

## Notes
- You are expected to write great code. It’s not sufficient that it works. Please ensure the separation of test logic and cases.
- Please make frequent and descriptive git commits.
- Use additional third-party libraries or not; your choice.
- Feel free to add more tests as you have time, but the suite provided is the priority.
- In the package.json of the project, it is described exactly how to run the tests.

## What we're looking for
- The functionality of the project matches the description above
- The project indicates you have an ability to think through important potential cases

When complete, please push your code to a Github repo in your own account. Send the link to the project or zip the project (including the `.git` directory) and send it back.

Thank you and please ask if you have any questions!

---
## Extra Credit 🚀🚀🚀
- Add a test case for a scenario that we didn't ask for!
- In the `README.md` add list what would you do differently if you had more time to work on this.
