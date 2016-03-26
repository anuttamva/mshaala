//extra function present
angular.module('courses').controller('CoursesController', ['$scope','$routeParams', '$location', 'Authentication', 'Courses',function($scope, $routeParams, $location, Authentication, Courses)
{
    $scope.authentication = Authentication;
    
    $scope.create = function() {
        var course = new Course(
           {
	"organization" : {
		"name" : "Karnataka State Board of Secondary Education",
		"degrees" : [
			{
				"name" : "Junior Grade in Classical Music",
				"level" : "Beginner",
				"syllabus" : [
					{
						"name" : "Karnataka State Board Carnatic Classical Vocal Junior Exam",
						"genre" : "Carnatic Classical Music",
						"medium" : "Vocal",
						"parts" : [
							{
								"name" : "Theory Syllabus",
								"chapters" : [
									{
										"number" : "1",
										"name" : "THE GREATNESS OF MUSIC",
										"sections" : [
											{
												"name" : "Arts and Fine Arts",
												"subsections" :[
												{"name":"Music and Science"},
												
												{"name":"Music and Physiology"},
												
												{"name":"Music and Physics"},
												{"name":"Music and Mathematics"},
												{"name":"Music and Social Science"},
												{"name":"Importance of Learning Music"}
												]
											},
											{
												"name" : "The origin and development of Music",
												"subsections" :[
												{"name":"Music and Science"},
												
												{"name":"Music and Physiology"},
												
												{"name":"Music and Physics"},
												{"name":"Music and Mathematics"},
												{"name":"Music and Social Science"},
												{"name":"Importance of Learning Music"}
												]
											},
											{
												"name" : "Music and Other Fields of Study",
												"subsections" :[
												{"name":"Music and Science"},
												
												{"name":"Music and Physiology"},
												
												{"name":"Music and Physics"},
												{"name":"Music and Mathematics"},
												{"name":"Music and Social Science"},
												{"name":"Importance of Learning Music"}
												]
											}
											
										]
									},
									{
										"number" : "2",
										"name" : "CATEGORIES OF INDIAN MUSIC",
										"sections" : [
											{
												"name" : "Background",
												"subsections" :[
												{"name":"Music and Physics"},
												
												{"name":"Music and Physics"},
												
												{"name":"Music and Physics"}
												]
											}
										]
									},
									{
										"number" : "3",
										"name" : "GLOSSARY OF TERMS IN CARNATIC MUSIC",
										"sections" : [
											{
												"name" : "Background",
												"subsections" :[
												{"name":"Music and Physics"},
												
												{"name":"Music and Physics"},
												
												{"name":"Music and Physics"}
												]
											}
										]
									},
									{
										"number" : "4",
										"name" : "RAAGA",
										"sections" : [
											{
												"name" : "Background",
												"subsections" :[
												{"name":"Music and Physics"},
												
												{"name":"Music and Physics"},
												
												{"name":"Music and Physics"}
												]
											}
										]
									},
									{
										"number" : "5",
										"name" : "RAAGA LAKSHANA",
										"sections" : [
											{
												"name" : "Background",
												"subsections" :[
												{"name":"Music and Physics"},
												
												{"name":"Music and Physics"},
												
												{"name":"Music and Physics"}
												]
											}
										]
									},
									{
										"number" : "6",
										"name" : "TAALA AND KAALA",
										"sections" : [
											{
												"name" : "Background",
												"subsections" :[
												{"name":"Music and Physics"},
												
												{"name":"Music and Physics"},
												
												{"name":"Music and Physics"}
												]
											}
										]
									},
									{
										"number" : "7",
										"name" : "MUSIC COMPOSITION",
										"sections" : [
											{
												"name" : "Background",
												"subsections" :[
												{"name":"Music and Physics"},
												
												{"name":"Music and Physics"},
												
												{"name":"Music and Physics"}
												]
											}
										]
									},
									{
										"number" : "8",
										"name" : "WRITING MUSICAL NOTATIONS",
										"sections" : [
											{
												"name" : "Background",
												"subsections" :[
												{"name":"Music and Physics"},
												
												{"name":"Music and Physics"},
												
												{"name":"Music and Physics"}
												]
											}
										]
									},
									{
										"number" : "9",
										"name" : "CLASSIFICATION OF MUSICAL INSTRUMENT",
										"sections" : [
											{
												"name" : "Background",
												"subsections" :[
												{"name":"Music and Physics"},
												
												{"name":"Music and Physics"},
												
												{"name":"Music and Physics"}
												]
											}
										]
									},
									{
										"number" : "10",
										"name" : "VAAGGEYAKAATAS",
										"sections" : [
											{
												"name" : "Background",
												"subsections" :[
												{"name":"Music and Physics"},
												
												{"name":"Music and Physics"},
												
												{"name":"Music and Physics"}
												]
											}
										]
									}
								]
							},
							{
								"name" : "Practical Syllabus",
								"chapters" : [
									{
										"number" : "1",
										"name" : "Basics of Music",
										"sections" : [
											{
												"name" : "Background"
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
}
    );
        course.$save(function(response) {
            $location.path('courses/' + response._id);
        }, function(errorResponse) {
            $scope.error = errorResponse.data.message;
        });
    };
    
    $scope.find = function() {
        $scope.courses = Courses.query();
    };
    $scope.findOne = function() {
        $scope.course = Courses.get({
            courseId: $routeParams.courseId
        });
    };
    
    
    $scope.getLength = function(obj)
    {
        input = [];
        for (var i=0;i<obj.length;i+=4)
        {
            input.push(i);
        }

        return input;
    };
    /////////////////////
    
    
    
}]);


