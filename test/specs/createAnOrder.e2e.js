const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
    it('Set the address', async () => {
        // Should set the address
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const fromField = await $(page.fromField);
        await fromField.click();
        const toField = await $(page.toField);
        await toField.click();
        await expect($(page.fromField).toHaveValue('East 2nd Street, 601'));
        await expect($(page.toField).toHaveValue('1300 1st St'));
       
    })


    

    it('Should select the supportive car type', async () => {
        //Should select the supportive car type
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportive = await $('//div[starts-with(text(), "Supportive")]');
        await supportive.waitForDisplayed();
        await supportive.click();
        await expect(page.supportiveMode).toBeEnabled;
    })

    it('Should imput the phone number', async () => {
        // Should imput the phone number
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })

    it('Should add a payment card', async () => {
        // Should add a payment card
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.addPaymentMethodCard();
        
        const cardPaymentMethodIcon = await $(page.cardPaymentMethodIcon);
        await cardPaymentMethodIcon.waitForDisplayed();
        await expect(await $(cardPaymentMethodIcon)).toBeExisting();
    })  



    it('Should message the driver', async () => {
        //Should message the driver
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const messageDriver = await $('#comment');
        await messageDriver.setValue('Get some whiskey');
        await expect (messageDriver).toHaveValueContaining('Get some whiskey');
        

    })

    it('Should add a blanket and hedkerchiefs to the order', async () => {
        // Should add a blanket and hedkerchiefs to the order
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const orderRequirmentsButton = await $(page.orderRequirmentsButton);
        await orderRequirmentsButton.click();
        const blanketAndHankerchiefsButton = await $(page.blanketAndHandkerchiefsButton);
        await blanketAndHankerchiefsButton.scrollIntoView();
        await expect(blanketAndHankerchiefsButton).toBeChecked
      

    })   

    it('Should order 2 ice cream', async () => {
        //Should order 2 ice cream
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const iceCreamPlusButton = await $(page.iceCreamPlusButton);
        await iceCreamPlusButton.waitForDisplayed();
        await iceCreamPlusButton.click();
        await iceCreamPlusButton.click();

        const iceCreamValueButton = await $(page.iceCreamValueButton);
        const iceCreamGetText = await iceCreamValueButton.getText();
        await expect(iceCreamGetText).toBe('2');

    })   

    it('Car search modal should apper', async () => {
        // Car search modal should appear
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const orderButton = await $(page.orderButton);
        await orderButton.waitForDisplayed();
        await orderButton.click();
        const carSearchModal = await $(page.carSearchModal);
        await carSearchModal.scrollIntoView();
        await expect(carSearchModal).toBeChecked





    
    }) 


})

