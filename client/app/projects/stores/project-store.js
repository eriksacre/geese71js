var AppDispatcher = require('../../dispatcher/app-dispatcher');
var EventEmitter = require('events').EventEmitter;
var ProjectActionTypes = require('../actions/project-action-types');
var assign = require('object-assign');

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

function setFavourite(id) {
    var project = _projects[id];
    project.favourite = true;
}

function clearFavourite(id) {
    var project = _projects[id];
    project.favourite = false;
}

function update(project) {
    var p = _projects[project.id];
    p.name = project.name;
    p.favourite = project.favourite;
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
            create(action.payload.name);
            ProjectStore.emitChange();
            break;

        case ProjectActionTypes.PROJECT_SET_FAVOURITE:
            setFavourite(action.payload.id);
            ProjectStore.emitChange();
            break;

        case ProjectActionTypes.PROJECT_CLEAR_FAVOURITE:
            clearFavourite(action.payload.id);
            ProjectStore.emitChange();
            break;

        case ProjectActionTypes.PROJECT_RECEIVE_ALL:
            receiveAll(action.payload.projects);
            ProjectStore.emitChange();
            break;

        case ProjectActionTypes.PROJECT_UPDATE:
            update(action.payload.project);
            ProjectStore.emitChange();
            break;
    }
});

module.exports = ProjectStore;