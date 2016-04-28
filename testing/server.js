var express = require('express');
var app = express();

// Task: Modify the application so when a request comes on /notes/<note>,
// new <note> will be added to storage, so it can be seen on /notes endpoint.
// 'notes' Array will be our database for now.
// Bonus Task: Add an REST enpoint, so a DELETE request on /notes/<note> removes a note.

// Request on localhost:3000 greets you, localhost:3000/notes lists currently stored notes.
// Run the application and use your browser to test it!

var notes = [];

app.get('/hello/:name', (req, res) => {
    res.send('Hello, ' + req.params.name + '!');
});

app.get('/notes', (req, res) => {
    res.json(notes);
});

app.get('/notes/:note', (req, res) => {
    notes.push(req.params.note);
res.json({
    added: req.params.note,
    list: 'http://localhost:3000/notes'
});
});

app.delete('/notes/:note', (req, res) => {
    if(notes.indexOf(req.params.note) !== -1) {
    notes.splice(notes.indexOf(req.params.note));
    res.json({
        deleted: req.params.note,
        list: 'http://localhost:3000/notes'
    });
} else {
    res.status(404).send('Nothing here.');
}
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

exports.notes = notes;