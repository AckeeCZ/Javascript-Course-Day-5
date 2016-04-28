
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
