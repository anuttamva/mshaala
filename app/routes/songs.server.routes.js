// Invoke 'strict' JavaScript mode
'use strict';

var users = require('../../app/controllers/users.server.controller'),
    songs = require('../../app/controllers/songs.server.controller');

module.exports = function(app) {
    app.route('/api/songs')
        .get(songs.list)
        .post(users.requiresLogin, songs.create);
    app.route('/api/songs/:songId')
        .get(songs.read);
    app.param('songId', songs.songByID);
};