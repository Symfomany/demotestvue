let r = require('rethinkdb');


class Task {

    constructor(table = "task") {
        this.table = table;
        r.connect({ db: "test" }).then((connection) => {
            this.connection = connection;
        });
    }

    getAll() {
        r.table('tasks').run(this.connection, (err, cursor) => {
            cursor.toArray((err, result) => {
                return res.json(result)
            });
        });
    }



}