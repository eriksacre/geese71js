var AppDispatcher = require('../../dispatcher/app-dispatcher');
var ProjectActionTypes = require('./project-action-types');
var ProjectAPI = require('../utils/project-api');
var AppSubscriber = require('../../subscriber/app-subscriber');

module.exports = {
    create: function(name) {
        AppDispatcher.dispatch({
            actionType: ProjectActionTypes.PROJECT_CREATE,
            payload: { name: name }
        });
    },

    setFavourite: function(id) {
        AppDispatcher.dispatch({
            actionType: ProjectActionTypes.PROJECT_SET_FAVOURITE,
            payload: { id: id }
        });
        ProjectAPI.setFavourite(id);
    },

    clearFavourite: function(id) {
        AppDispatcher.dispatch({
            actionType: ProjectActionTypes.PROJECT_CLEAR_FAVOURITE,
            payload: { id: id }
        });
        ProjectAPI.clearFavourite(id);
    },

    receiveAll: function() {
        ProjectAPI.fetchAll(function(projects) {
            AppDispatcher.dispatch({
                actionType: ProjectActionTypes.PROJECT_RECEIVE_ALL,
                payload: { projects: projects }
            });
            AppSubscriber.subscribe('/projects');
        });
    }
};