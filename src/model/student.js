// Load required packages
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Define our user schema
var studentSchema = new Schema({
    student_name: {
        type: String,
        required: true
    },
    enrollment_number: {
        type: Number,
        required: true
    },
    class: {
        type: String,
        required: true
    }
   
});


module.exports = mongoose.model('student', studentSchema);