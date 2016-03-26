// Invoke 'strict' JavaScript mode
'use strict';

var mongoose = require('mongoose'),
    Song = mongoose.model('Song');

var getErrorMessage = function(err) {
    if (err.errors) {
        for (var errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } else {
        return 'Unknown server error';
    }
};

exports.create = function(req, res) {
    var song = new Song(req.body);
    song.save(function(err) {
        if (err) {
            return res.status(400).send({message: getErrorMessage(err)});
        } 
        else {
            res.json(song);
        }
    });
};


exports.list = function(req, res) {
    Song.find()
        .exec(function(err, songs) {
            if (err) {
                return res.status(400).send({message: getErrorMessage(err)});
            } else {
                res.json(songs);
            }
        });
};

exports.songByID = function(req, res, next, id) {
    Song.findById(id)
            .exec(function(err, song) {
                if (err) 
                    return next(err);
                if (!song) 
                    return next(new Error('Failed to load song '+ id));
                req.song = song;
                next();
            });
};

exports.read = function(req, res) {
    res.json(req.song);
};