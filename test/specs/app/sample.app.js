const androidPage = require('../../pageobjects/androidPage.js');
const expect = require('chai').expect;

describe('Sample test app', () => {

  it('Verify that the text entry androidPage username & password fields are editable', async ()=>{
    await androidPage.appBtn.click();
    await androidPage.alertDialogBtn.click();
    await androidPage.textEntryDialogBtn.click();

    await androidPage.userNameField.addValue("Test User");
    await androidPage.userNameField.clearValue();
    await androidPage.userNameField.addValue("Actual User");

    await androidPage.passwordField.clearValue();
    await androidPage.passwordField.addValue("Test Pass");

    let text = await androidPage.userNameField.getText();
    console.log(text);
    expect(text).equal("Actual User");

    await androidPage.dialogOkBtn.click();
  });

  /*it('Verify that the app adjust when orientation is switched', async () => {
    console.log(await driver.getOrientation());
    await driver.setOrientation('LANDSCAPE');

    await driver.saveScreenshot('./screenshots/landscape.png');
    await androidPage.appBtn.click();

    await driver.setOrientation('PORTRAIT');
    await driver.back();
    await driver.saveScreenshot('./screenshots/portrait.png');
  });

  it('Verify isSelected, isEnabled & isDisplayed', async () => {
    await androidPage.viewBtn.click();
    await driver.touchAction([
          { action: 'press', x: 500, y: 1400 },
          { action: 'moveTo', x: 500, y: 300 },
          'release',
          { action: 'press', x: 500, y: 1400 },
          { action: 'moveTo', x: 500, y: 300 },
          'release',
          { action: 'press', x: 500, y: 1400 },
          { action: 'moveTo', x: 500, y: 300 },
          'release'
      ])

      await androidPage.tabsBtn.click();
      await androidPage.contentByIdBtn.click();

      let isEnabled, isSelected, isDisplayed;

      for(let i=0; i<3; i++){
          isEnabled = await androidPage.tabs[i].isEnabled();
          isSelected = await androidPage.tabs[i].isSelected();
          isDisplayed = await androidPage.tabs[i].isDisplayed();

          console.log(`Tab ${i+1}`)
          console.log('isEnabled:', isEnabled);
          console.log('isSelected:', isSelected);
          console.log('isDisplayed:', isDisplayed);

          if(isEnabled && isSelected){
              console.log("Tab Details 1:", androidPage.tab1Details.isDisplayed());
              console.log("Tab Details 2:", androidPage.tab2Details.isDisplayed());
              console.log("Tab Details 3:", androidPage.tab3Details.isDisplayed());
          }
      }
  });

  it('Verify Timeouts', async () => {
      //driver.setImplicitTimeout(10000);
      //driver.setTimeouts(10000);
      //driver.pause(10000);

      await androidPage.viewBtn.click();
      //androidPage.tabsBtn.click();
  });

  it('Verify the repeat alarm options has attribute checked set to true when selected', async ()=>{
      let isChecked, text;

      await androidPage.appBtn.click();
      await androidPage.alertandroidPageBtn.click();
      await androidPage.repeatAlarmBtn.click();

      text = await androidPage._weekdayCheckbox(0).getText();
      expect(text).equal('Every Monday');

      isChecked = await androidPage._weekdayCheckbox(0).getAttribute('checked');
      expect(isChecked).equal('false');

      await androidPage._weekdayCheckbox(0).click();

      isChecked = await androidPage._weekdayCheckbox(0).getAttribute('checked');
      expect(isChecked).equal('true');
  });

  // Execute a block of code after every test
  afterEach(() => {
      driver.reset();
  });*/
});