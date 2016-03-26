var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
//console.log('Server running at http://localhost:3000/');
var CourseSchema = new Schema({
	organization : {
		name : String,
		 degrees  : [
			{
				 name  : String,
				 level  : String,
				 syllabus  : [
					{
						 name  : String,
						 genre  : String,
						 medium  : String,
						 parts  : [
							{
								 name  : String,
								 chapters  : [
									{
										 number  : String,
										 name  : String,
										 sections  : [
											{
												 name  : String,
												 subsections  :[{ name :String}]
											}
										]
									}
								]
							}
						]
					}
				]
			}			
		]
	}
});
mongoose.model('Course', CourseSchema);