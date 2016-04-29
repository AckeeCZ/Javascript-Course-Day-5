var storage = require('components/MemoryStorage');

var mongoose = require('mongoose');
var Note = mongoose.model('Note');

exports.listNotes = () => {
    return new Promise((resolve, reject) => {
        Note.find({}, (err, notes) => {
            if (err) {
                return reject(err);
            }
            return resolve(notes);
        });
    });
}

exports.createNote = (note) =>
{

    return new Promise((resolve, reject) => {
        var note = new Note({note: "Ahoj"})
        note.save({}, (err) => {
            if (err) {
                return reject(err);
            }
            return resolve(note);
        });
    });
}

exports.deleteNote = (note) =>
{

    var result = storage.deleteNoteByNote(note);
    if (result) {
        return Promise.resolve();
    }
    return Promise.reject();
}
