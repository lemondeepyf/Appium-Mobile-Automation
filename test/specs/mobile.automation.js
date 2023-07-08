import halaman1 from '../pageobjects/halaman1.page'
import halaman2 from '../pageobjects/halaman2.page'
import homescreen from '../pageobjects/home.page'

describe('Mobile Automation Test', () => {
    it('the application displays the opening home screen ', async () => {
        //assert halaman1 
        halaman1.assertHeaderWelcome().toBeDisplayed();

        //HALAMAN 1
        //input form 
        halaman1.formName().click();
        halaman1.formName().setValue("yustiana");
        halaman1.formWeight().click();
        halaman1.formWeight().setValue('50');
        halaman1.formHeight().click();
        halaman1.formHeight().setValue('160');

        halaman1.radioBtnGender().click();
        halaman1.nextBtn().click();

        //HALAMAN 2 
        //choose aktifitas 
        halaman2.assertHeader().toBeDisplayed();
        halaman2.radioBtnAktifitas().click();
        halaman2.selesaiBtn().click();

        //HOMESCREEN 
        homescreen.assertheader1().toBeDisplayed();
        homescreen.assertheader2().toBeDisplayed();
    })
})