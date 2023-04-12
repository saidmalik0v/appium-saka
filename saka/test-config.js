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
        // './restaurant.js'
        //'./courier.js'
    ],
     capabilities:[{
         "platformName": "Android",
         "appium:automationName": "UiAutomator2",
         "appium:udid": "RZ8R32AQ56H",
         "appium:app": "/Users/muhammad/Documents/rasta_client_2.0.0_release.apk"
     }]
    // capabilities:[{
    //    "platformName": "Android",
    //    "appium:automationName": "UiAutomator2",
    //    "appium:udid": "RZ8R32AQ56H",
    //    "appium:app": "/Users/muhammad/Documents/rasta_restaurant_1.0.0_release.apk"
    // }]
    //  capabilities:[{
    //     "platformName": "Android",
    //     "appium:automationName": "UiAutomator2",
    //     "appium:udid": "RZ8R32AQ56H",
    //     "appium:app": "/Users/muhammad/Documents/rasta_courier_1.0.1_release.apk"
    // }]
}