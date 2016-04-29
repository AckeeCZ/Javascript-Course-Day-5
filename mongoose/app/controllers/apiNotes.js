
var facade = require('facade/facade');

exports.list = (req, res, next) => {

    facade.listNotes().then(records => {
        res.json(records);
    }).catch(next);
};

exports.create = (req, res, next) => {

    facade.createNote(req.body).then(() => {

        res.json({
            added: req.body,
            list: 'http://localhost:3000/api/notes'
        });
    }).catch(next);
};

exports.delete = (req, res, next) => {

    facade.deleteNote(req.params.note).then(() => {
        res.json({
            deleted: req.params.note,
            list: 'http://localhost:3000/api/notes'
        });
    }).catch(next);
};
