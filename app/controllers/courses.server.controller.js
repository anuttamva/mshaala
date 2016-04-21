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

var multer = require('multer');
var storage = multer.diskStorage({
destination: function(req,file,callback){
    callback(null,__dirname+'/uploads');
},
 filename:function(req,file,callback){
    callback(null,file.filename+'-'+Date.now());
 
 }
});
var upload = multer({storage:storage}).single('userPhoto');
var Course = require('mongoose').model('Course');
exports.renderHTML = function(req,res){
    res.sendFile(__dirname+'/indee.html');
    
};

exports.csv2json = function(req,res){
    upload(req,res,function(err){
        if(err)
        {
            return res.end("Error in uploading file");
        }
        else
        {
            console.log(req.file.filename);
            var Converter = require("csvtojson").Converter;
            var csvConverter = new Converter({constructResult:false});
            var readStream = require("fs").createReadStream(__dirname+"/uploads/"+req.file.filename);
            var writeStream = require("fs").createWriteStream(__dirname+"/outputData.json");
            readStream.pipe(csvConverter).pipe(writeStream);

            //var obj = require('./outputData.json');
            //console.log("yeee"+obj);
            console.log(__dirname);
            var name = 'C:/Users/Mohammed Nadeem/Desktop/SPRINT2/mShaala/public/courses/views'
            //res.sendFile(name+'/create-course.client.view.html');
            res.render('index', {
            title: 'Hello World',
            user: JSON.stringify(req.user)
            });
        }
    });
};


exports.create= function(req, res) {
    var obj = require('./outputData.json');
    var course = new Course(obj);
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