
var express = require('express');
var router = express.Router();
var storage = require('components/MemoryStorage');
var _ = require('lodash');
var notes = require('controllers/apinotes');

router.post('/notes', (req, res, next) => {

    if ('undefined' === typeof req.body.note) {
        return res.status(400).json({
            message: 'Field `note` is required.'
        });
    }
    next();
});

router.get('/notes', notes.list);
router.post('/notes', notes.create);
router.delete('/notes/:note', notes.delete);

module.exports = router;
