// Load required packages
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Define our user schema
var feeSchema = new Schema({
    student_id: {
        type: String,
        required: true
    },
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
    },
    amount: {
        type: Number,
        required: true
    }
   
});


module.exports = mongoose.model('fee', feeSchema);






