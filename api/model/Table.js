let r = require('rethinkdb');


/**
 * class Task
 */
class Table {

    /**
     * Construction de nom de table
     * @param {*} table 
     */
    constructor(table) {
        if (!table) throw "Un nom de table est requis"
        this.table = r.table(table);
    }

    /**
     *  Get all of table
     */
    getAll() {
        return this.table.pluck('id', 'content');
    }

    /**
     * Get one detail
     * @param {*} id 
     */
    getOne(id) {
        if (!id) throw "Un id est requis"
        return this.table.get(id);
    }

    /**
     * Remove task
     * @param {*} id 
     */
    remove(id) {
        if (!id) throw "Un id est requis"
        return this.getOne(id).delete();
    }

    /**
     * Insert one or several object
     * @param {*} obj 
     */
    add(obj) {
        if (!obj) throw "Un ou plusieurs taches doivent etre renseigné"
        return this.table.insert(obj);
    }

    /**
     * Add favoris
     * @param {*} id 
     */
    addFavoris(id) {
        if (!id) throw "Un id est requis"
        this.table.get(id).update({ "star": true }).run(connection, (err, cursor) => {
            res.json(true)
        });
    }

    /**
     * remove favoris
     * @param {*} id 
     */
    removeFavoris(id) {
        if (!id) throw "Un id est requis"
        this.table.get(id).update({ "star": false }).run(connection, (err, cursor) => {
            res.json(true)
        });
    }

}

/**
 * Export de la classe
 */
module.exports = Table;