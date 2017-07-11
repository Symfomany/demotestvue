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
    client.expect.element('ul.list li:nth-child(4)').to.be.present.before(1000);
  },


  'step three: new Task': (client) => {
    const devServer = client.globals.devServerURL

    client.url(devServer);
    client.pause(1000)
      .setValue('input#textNewTask', 'Nightwatch')
      .submitForm('form#newTask')
      .pause(1000);
    client.expect.element('ul.list li:nth-child(5)').to.be.present
  },


  'step four: remove Task': (client) => {
    const devServer = client.globals.devServerURL

    client.url(devServer);
    client.pause(1000)
      .click('ul.list li:nth-child(6) a.list__tile')
      .pause(1000);
    client.expect.element('ul.list li:nth-child(4)').to.be.present
  },
  afterEach: function (browser, done) {
    // performing an async operation
    setTimeout(function () {
      // finished async duties
      done();
    }, 200);
  }
}
