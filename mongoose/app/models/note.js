
/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * User schema
 */

var NoteSchema = new Schema({
  name: { type: String, default: '' },
  created: { type: Date, default: Date.now }
});

/**
 * User plugin
 */


/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

NoteSchema.method({

});

/**
 * Statics
 */

NoteSchema.static({

});

/**
 * Register
 */

mongoose.model('Note', NoteSchema);
