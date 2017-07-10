let assert = require('chai').assert;
let expect = require('chai').expect;
let Table = require('./Table')
let r = require('rethinkdb');


/**
 * objet table  
 */
let Task = new Table('tasks');

describe('Table', function () {

    it('should list ALL table', function (done) {
        this.timeout(30000);

        r.connect({
            db: "test"
        }).then((connection) => {
            Task.getAll().run(connection, (err, cursor) => {
                cursor.toArray((err, tab) => {
                    console.log(tab);
                    expect(tab).to.have.lengthOf(6);
                    done();
                });

            });

        });
    });

    let keyNew = null;
    it('should be insert in table', function (done) {
        this.timeout(30000);

        r.connect({
            db: "test"
        }).then((connection) => {
            let data = { content: 'coucou, tu veux voir mon test?', created: new Date() };
            Task.add(data).run(connection, (err, res) => {
                console.log(res.generated_keys);
                expect(res).not.to.be.empty;
                expect(res.generated_keys).not.to.be.empty;
                expect(res.generated_keys[0]).to.be.a('String');
                keyNew = res.generated_keys[0];
                done();

            });

        });
    });


    it('should be detail in table', function (done) {
        this.timeout(30000);

        r.connect({
            db: "test"
        }).then((connection) => {
            Task.getOne(keyNew).run(connection, (err, res) => {
                expect(res).not.to.be.empty;
                expect(res.content).to.be.equal('coucou, tu veux voir mon test?');
                done();
            });

        });
    });




    it('should be delete in table', function (done) {
        this.timeout(30000);

        r.connect({
            db: "test"
        }).then((connection) => {
            Task.remove(keyNew).run(connection, (err, res) => {
                console.log(res.generated_keys);
                expect(res).not.to.be.empty;

                done();

            });

        });
    });



});
