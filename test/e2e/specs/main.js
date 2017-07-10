// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

// http://nightwatchjs.org/guide#bdd-expect-assertions
module.exports = {

  beforeEach: function (browser, done) {
    // performing an async operation
    setTimeout(function () {
      // finished async duties
      done();
    }, 100);
  },


  'step one: main page': (browser) => {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .assert.elementPresent('.toolbar__title')
      .pause(1000).end();
  },

  'step two: all tasks': (client) => {
    const devServer = client.globals.devServerURL

    client.url(devServer);
    client.expect.element('ul.list li:nth-child(6)').to.be.present.before(1000);
  },


  afterEach: function (browser, done) {
    // performing an async operation
    setTimeout(function () {
      // finished async duties
      done();
    }, 200);
  }
}
