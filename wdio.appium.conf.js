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
        platformName: 'Android',
        //automationName: 'XCUITest', // Only for IOS
        //platformName: 'iOS',
        deviceName: 'Pixel 6',
        //deviceName: 'iPhone 12', //IOS
        app: '/Users/jam3/Downloads/testApps/ApiDemos-debug.apk',
        //app: '/Users/jam3/Downloads/testApps/TestApp.app', // IOS
        // ... other desired capabilities
      },
    ],
        
  appium: {
      // Specify the Appium server settings
      command: 'appium'
  },
});
