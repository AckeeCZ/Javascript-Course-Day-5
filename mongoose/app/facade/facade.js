var storage = require('components/MemoryStorage');

exports.listNotes = () => {
    return storage.listNotesPromise();
};

exports.createNote = (note) => {

    return Promise.resolve(storage.addNote(note));
}

exports.deleteNote = (note) => {

    var result = storage.deleteNoteByNote(note);
    if (result) {
        return Promise.resolve();
    }
    return Promise.reject();
}
