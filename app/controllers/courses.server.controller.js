// Invoke 'strict' JavaScript mode
'use strict';

var mongoose = require('mongoose'),
    Course = mongoose.model('Course');

var getErrorMessage = function(err) {
    if (err.errors) {
        for (var errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } else {
        return 'Unknown server error';
    }
};

//console.log('Server running at http://localhost:3000/');


exports.create = function(req, res) {
    var course = new Course(req.body);
    course.save(function(err) {
        if (err) {
            return res.status(400).send({message: getErrorMessage(err)});
        } 
        else {
            res.json(course);
        }
    });
};


exports.list = function(req, res) {
    Course.find()
        .exec(function(err, courses) {
            if (err) {
                return res.status(400).send({message: getErrorMessage(err)});
            } else {
                res.json(courses);
            }
        });
};

exports.courseByID = function(req, res, next, id) {
    Course.findById(id)
            .exec(function(err, course) {
                if (err) 
                    return next(err);
                if (!course) 
                    return next(new Error('Failed to load course '+ id));
                req.course = course;
                next();
            });
};

exports.read = function(req, res) {
    res.json(req.course);
};