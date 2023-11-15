const {join} = require('path');

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
    launch: {
        headless: process.env.HEADLESS !== 'false',
        args: ['--no-sandbox', '--disable-setuid-sandbox'], // For CI environments
      },
    // Changes the cache location for Puppeteer.
    cacheDirectory: join(__dirname, '.cache', 'puppeteer'),
};