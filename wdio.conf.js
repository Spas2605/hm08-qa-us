exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    headless: true,
    capabilities: [
    //     {
    //     maxInstances: 5,
    //     browserName: 'chrome',
    //     acceptInsecureCerts: true,
    //     'goog:chromeOptions': {
    //         args: ['headless', 'disable-gpu']
    //     }
    // },
    {
        maxInstances: 5,
        browserName: 'firefox',
        acceptInsecureCerts: true,
        // 'moz:firefoxOptions': {
        //     // args: ['-headless']
        // }
    }
],
    logLevel: 'error',
    bail: 0,
    baseUrl: '     https://5c5700bf-be60-4832-9b94-433b63a9aea0.serverhub.tripleten-services.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        'chromedriver', 
        'geckodriver', 
        'intercept', 
    ],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}