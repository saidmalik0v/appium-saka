exports.config = {

    runner: 'local',
  
    port: 4723,
  
    hostname: 'localhost',
  
    path: '/wd/hub',
  
    logLevel: 'info',
  
    framework: 'mocha',
  
    mochaOpts: {
  
      ui: 'bdd',
  
      require: ['@babel/register'],
  
      timeout: 600000
  
    },
  
    waitforTimeout: 10000,
  
    maxInstances: 10,
  
    sync: true,
  
    specs: [
  
      './rasta.js'
  
    ],
  capabilities:[{
    "platformName": "Android",
    "automationName": "UiAutomator2",
    "udid": "5200ac466078a583",
    "appPackage": "com.girgitton.user",
    "appActivity": ".MainActivity"
  }]
}