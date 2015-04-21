var AppDispatcher = require('../../dispatcher/app-dispatcher');
var EventEmitter = require('events').EventEmitter;
var ProjectActionTypes = require('../actions/project-action-types');
var assign = require('object-assign');
var ProjectAPI = require('../utils/project-api');

var CHANGE_EVENT = "change";

var _projects = {};

function receiveAll(projects) {
    _projects = {};
    projects.forEach(function(project) {
        _projects[project.id] = project;
    });
}

function create(name) {
    var id = Math.floor(Math.random() * 99999);
    _projects[id] = {
        id: id,
        name: name,
        favourite: false
    };
}

function toggleFavourite(id) {
    var project = _projects[id];
    project.favourite = !project.favourite;
}

var ProjectStore = assign({}, EventEmitter.prototype, {
    getAll: function() {
        return _projects;
    },

    findById: function(id) {
        return _projects[id];
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(action) {
    switch(action.actionType) {
        case ProjectActionTypes.PROJECT_CREATE:
            create(action.name);
            ProjectStore.emitChange();
            break;

        case ProjectActionTypes.PROJECT_TOGGLE_FAVOURITE:
            toggleFavourite(action.id);
            ProjectStore.emitChange();
            break;

        case ProjectActionTypes.PROJECT_RECEIVE_ALL:
            // Would work through a callback
            receiveAll(ProjectAPI.fetchAll());
            ProjectStore.emitChange();
            break;
    }
});

module.exports = ProjectStore;