const baseConfig = require('./wdio.conf.js');

exports.config = Object.assign(baseConfig.config, {
  specs: [
    './test/specs/app/**/*.js'
  ],
  port: 4723,
  services: ['appium'],

  capabilities: [
      {
        // Set your desired capabilities for the mobile device
        platformName: 'Android', // or 'iOS'
        deviceName: 'Pixel 6',
        //platformVersion: '<your-android-version>',
        //appiumVersion: '1.22.0',
        //automationName: 'UiAutomator2',
        app: '/Users/jam3/Downloads/testApps/ApiDemos-debug.apk',
        // ... other desired capabilities
      },
    ],
        
  appium: {
      // Specify the Appium server settings
      command: 'appium'
  },
});
