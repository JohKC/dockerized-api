const conn = require('../config/db');

exports.get = (req, res) => {
    conn.query("SELECT * FROM artists", (err, results, fields) => {
        if (err) throw err;

        res.json(results);
    });
};

exports.getById = (req, res) => {
    const { id } = req.params;
    conn.query(`SELECT * FROM artists WHERE artist_id = '${id}'`, (err, results, fields) => {
        if (err) {
            res.status(500);
            res.json({ error: 'There was an error.' })
        }

        res.json(results[0]);
    });
};

exports.insert = (req, res) => {
    const { artist_name } = req.body;

    conn.query(`INSERT INTO artists (artist_name) VALUES ('${artist_name}')`, (err, results, fields) => {
        if (err) {
            res.status(500);
            res.json({ error: 'There was an error.' })
        };

        res.json({ result: 'Artist inserted.' });
    });
};


exports.update = (req, res) => {
    const { artist_name } = req.body;
    const { id } = req.params;

    conn.query(`UPDATE artists SET artist_name = '${artist_name}' WHERE artist_id = ${id}`, (err, results, fields) => {
        if (err) {
            res.status(500);
            res.json({ error: 'There was an error.' })
        };

        res.json({ result: 'Artist updated.' });
    });
};


exports.delete = (req, res) => {
    const { id } = req.params;

    conn.query(`DELETE FROM artists WHERE artist_id = ${id}`, (err, results, fields) => {
        if (err) {
            res.status(500);
            res.json({ error: 'There was an error.' })
        };

        res.json({ result: 'Artist deleted.' });
    });
};