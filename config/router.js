var student = require('./../controllers/student');
var teacher = require('./../controllers/teacher');

module.exports = function(router){				//if we want to export functions to other modules
	router.route('/students')					//route handler
		.get(student.find);						//

	return router;
};

module.exports = function(router){				//if we want to export functions to other modules
	router.route('/teachers')					//route handler
		.get(teacher.find)						
		.post(teacher.add);
	return router;
};

