var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var EnrollSchema = new Schema({
     studentId: Number,
     courses: [
         {
             courseId: Number
         }
     ]
});
mongoose.model('Enroll', EnrollSchema);