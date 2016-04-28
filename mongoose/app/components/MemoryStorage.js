
var _ = require('lodash');
var notes = [];

exports.addNote = (note) => {

    notes = [...notes, note];
    console.log('adding', note, notes);
};

exports.removeNote = (note) => {

    if (notes.indexOf(note) !== -1) {
        notes.splice(notes.indexOf(note), 1);
        return true;
    }
    return false;
};

exports.listNotes = () => {

    return notes;
};

exports.listNotesCallback = (cb) => {

    process.nextTick(() => {
        cb(null, notes);
    });
};

exports.listNotesPromise = () => {

    return new Promise((resolve, reject) => {
        exports.listNotesCallback((err, items) => {
            if (err) {
                return reject(err);
            }
            resolve(items);
        });
    });
};

exports.deleteNoteByNote = (note) => {

    if (_.find(notes, {note: note})) {
        notes.splice(_.findIndex(notes, {note: note}));
        return true;
    }
    return false;
};
