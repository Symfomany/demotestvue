let chai = require('chai'),
    app = require('./server.js'),
    chaiHttp = require('chai-http'),
    expect = require('chai').expect;

chai.use(chaiHttp);


before(function () {
    // runs before all tests in this block
});

it('all tasks', (done) => { // <= Pass in done callback

    chai.request(app)
        .get('/')
        .end((err, res) => {
            expect(res.body).to.be.a('array');
            expect(res.body).to.have.length(8);
            done();
        });

});



it('insert a task', (done) => { // <= Pass in done callback

    chai.request(app)
        .post('/newtask')
        .send({ content: 'justest' })
        .end((err, res) => {
            expect(res.body).to.be.a('array');
            expect(res.body).to.have.length(9);
            done();
        });

});



it('filter tasks', (done) => { // <= Pass in done callback

    chai.request(app)
        .get('/filter/coucou')
        .end((err, res) => {
            expect(res.body).to.be.a('array');
            expect(res.body).to.have.length(1);
            done();
        });

});



it('detail a task', (done) => { // <= Pass in done callback

    chai.request(app)
        .get('/detail/bcc23a73-bb55-4661-b368-fbe664020d60')
        .end((err, res) => {
            expect(res.body).to.be.a('object');
            expect(res.body).to.have.property("content");
            expect(res.body.content).to.be.equal('coucou');

            done();
        });

});


it('start a task', (done) => { // <= Pass in done callback

    chai.request(app)
        .get('/star/fdfa6823-2e48-4fdb-92f4-b2acd5ec266f')
        .end((err, res) => {
            expect(res.body).to.be.a('boolean');
            expect(res.body).to.be.equal(true);
            done();
        });

});

it('unstar a task', (done) => { // <= Pass in done callback

    chai.request(app)
        .get('/star/fdfa6823-2e48-4fdb-92f4-b2acd5ec266f')
        .end((err, res) => {
            expect(res.body).to.be.a('boolean');
            expect(res.body).to.be.equal(true);
            done();
        });

});

it('remove a test task', (done) => { // <= Pass in done callback

    chai.request(app)
        .get('/removeFilter/justest')
        .end((err, res) => {
            expect(res.body).to.be.a('boolean');
            expect(res.body).to.be.equal(true);
            done();
        });

});

after(function () {
    // runs after all tests in this block

});



beforeEach(function () {
    // runs before each test in this block
});

afterEach(function () {
    // runs after each test in this block
});