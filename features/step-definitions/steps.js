import { addParentSuite } from "@wdio/allure-reporter";
import { Given, When, Then} from "@wdio/cucumber-framework";
import { browser, $} from "@wdio/globals"

Given ("I am on Login page", async function() {
    await browser.navigateTo("https://the-internet.herokuapp.com/login")
    
});
When(`I enter a "tomsmith" username`, async function () {
    const usernameInput = await $("#username");
    usernameInput.setValue("tomsmith");
    // (await $("#username")).setValue("tomsmith");
});

When(`I enter a "asdwe" username`, async function () {
    const usernameInput = await $("#username");
    usernameInput.setValue("asdwe");
});

When (`I enter a "SuperSecterPassword!" password`, async function (){
    const passwordInput = await $("#password");
    passwordInput.setValue("SuperSecretPassword!");
});

    When (`I enter a "asdwqtr" password`, async function (){
        const passwordInput = await $("#password");
        passwordInput.setValue("asdwqtr");
});

When (`I press on Login buttom`, async function() {
    const button = await $("button[type=submit]");
    button.click();
});
Then (`I see a message "You logged into a secure area!"`, async function () {
    const flashMessage = await $("#flash");
    await expect(flashMessage)
    .toHaveText(expect.stringContaining("You logged into a secure area!"))
});

Then (`I see a message "Your username is invalid!"`, async function () {
    const flashMessage = await $("#flash");
    await expect(flashMessage)
    .toHaveText(expect.stringContaining("Your username is invalid!"))
})


Then (`I see the Logout button`, async function() {
    const logoutButton = await $("i*=Logout");
    await expect(logoutButton).toBeDisplayed();
});
Then (`I don't see the Logout button`, async function() {
    const logoutButton = await $("i*=Logout");
    await expect(logoutButton).not.toBeDisplayed();
});