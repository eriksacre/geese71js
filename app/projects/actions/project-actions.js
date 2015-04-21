var AppDispatcher = require('../../dispatcher/app-dispatcher');
var ProjectActionTypes = require('./project-action-types');

var ProjectActions = {
    create: function(name) {
        AppDispatcher.dispatch({
            actionType: ProjectActionTypes.PROJECT_CREATE,
            name: name
        });
    },

    toggleFavourite: function(id) {
        AppDispatcher.dispatch({
            actionType: ProjectActionTypes.PROJECT_TOGGLE_FAVOURITE,
            id: id
        });
    },

    receiveAll: function() {
        AppDispatcher.dispatch({
            actionType: ProjectActionTypes.PROJECT_RECEIVE_ALL
        });
    }
};

module.exports = ProjectActions;