
var express = require('express');
var router = express.Router();
var storage = require('components/MemoryStorage');
var _ = require('lodash');

// BonusTask (Task 2.5): add a middleware on POST /notes, so it validates the request body and checks for `note` property.
// If its not present in body, return HTTP status 400 and appropriate message. Otherwise pass the request on to next middleware in pipeline.

router.get('/notes', (req, res, next) => {

    res.json(storage.listNotes());
});

router.get('/notes/:note', (req, res, next) => {

    storage.addNote(req.params.note);
    res.json({
        added: req.params.note,
        list: 'http://localhost:3000/api/notes'
    });
});

router.delete('/notes/:note', (req, res, next) => {

    var result = storage.removeNote(req.params.note);
    if (result) {
        res.json({
            deleted: req.params.note,
            list: 'http://localhost:3000/api/notes'
        })
    } else {
        // Task 4: Try calling next with/without arguments and examine the middleware error handler. What happens?
        res.status(404).send('Not found');
    }
});

// Task 2: Implement an DELETE /notes/<note> endpoint, that will delete note object from storage that passes condition where `note` === <note>
// Remove the old DELETE enpoint when finished.
// Dont forget to implement appropriate method in MemoryStorage too!


// Task 1: Implement an POST /notes endpoint, that will add note passed in request body (entire object).
// Remove the old adding endpoint when finished.

module.exports = router;
