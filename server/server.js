var express = require('express'),
    bodyParser = require('body-parser'),
    faye = require('faye'),
    path = require("path");

var app = express(),
    bayeux = new faye.NodeAdapter({mount: '/ws', timeout: 45});

var port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname , '../')));
app.use('/build', express.static(path.join(__dirname , '../build')));

var router = express.Router();

router.use(function(req, res, next) {

    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next();

});

router.use(function (req, res, next) {
    console.log(req.method, req.path);
    next();
});

var client = new faye.Client('http://localhost:' + port + '/ws');

var ProjectRepository = {
    _projects: [
        { id: 1, name: 'Geese71 JS-edition', favourite: true },
        { id: 2, name: 'Personal Kanban', favourite: false },
        { id: 3, name: 'Innovation box', favourite: false }
    ],

    all: function() {
        return this._projects;
    },

    fetch: function(id) {
        for(var i = 0; i < this._projects.length; i++)
            if(this._projects[i].id == id)
                return this._projects[i];

        return null;
    },

    setFavourite: function(id) {
        var project = this.fetch(id);
        if(project) {
            project.favourite = true;
            this.publish(project);
        }
    },

    clearFavourite: function(id) {
        var project = this.fetch(id);
        if(project) {
            project.favourite = false;
            this.publish(project);
        }
    },

    publish: function(project) {
        client.publish('/projects', { actionType: "PROJECT_UPDATE", payload: { project: project } });
    }
};

router.route('/projects')
    .get(function(req, res) {
        res.json(ProjectRepository.all());
    });

router.route('/projects/favourites/:id')
    .put(function(req, res) {
        ProjectRepository.setFavourite(req.params.id);
        res.status(204).end();
    })
    .delete(function(req, res) {
        ProjectRepository.clearFavourite(req.params.id);
        res.status(204).end();
    });

app.use('/api', router);
var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
bayeux.attach(server);