/**
 * Demo des Test
 * Initiation de Express
 */

let express = require('express')
let app = express()


/**
 * Modules de Securité d'une API (logs, XSS securité etc...)
 */
let cors = require('cors');
let bodyParser = require('body-parser');
let helmet = require('helmet');
let path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

/**
 * Module RethinkDb
 */
let r = require('rethinkdb');

/**
 * Erreur 500 sortie en JSON
 */
app.use(function (error, request, response, next) {
    response.status(error.status || 500);
    response.json({ error: error.message });
});


/**
 * Connection with RethinkDB
 */
let connection = r.connect({
    db: "test" //your database
}).then((connection) => { // une fois qu'il a effectuer une connexion


    app.get('/', (req, res) => {
        r.table('tasks').run(connection, (err, cursor) => {
            cursor.toArray((err, result) => {
                return res.json(result)
            });
        });
    });

    app.get('/remove/:id', (req, res) => {
        let id = req.params.id;
        r.table('tasks').get(id).delete().run(connection, (err, cursor) => {
            res.json(true)
        });
    });

    app.post('/newtask', (req, res) => {
        r.table('tasks').insert(req.body).run(connection, (err, cursor) => {
            res.json(true)
        });
    });


});








app.listen(3000, function () {
    console.log('Listened on port 3000!')
})