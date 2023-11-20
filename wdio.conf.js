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
    baseUrl: '    https://9885c53f-3cd8-430c-be4f-c1fdae8e6bab.serverhub.tripleten-services.com',
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