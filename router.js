// TODO: find a better place for these requires
// These are only here to add shared code into main.js
require('react');
require('./app/shared/set-title-mixin');

// Simple router & incremental loader
// Structure: #/module/other/parts?query-string
// Placeholders: #/something/:id
// Modules are loaded on-demand
// Everything below a module is supposed to be part of that module

var Router = {
    defaultModule: 'projects',

    showLoading: function() {},
    hideLoading: function() {},

    match: function(path, callback) {
        // TODO: proper matching
        if(path === '/projects') callback();
    },

    projectRoutes: function() {
        Router.showLoading();
        require.ensure([], function () {
            Router.hideLoading();

            Router.match('/projects', function() {
                require('./app/projects/projects').show();
            });

            Router.match('/projects/:id', function() {
                require('./app/projects/overview').show();
            });
        });
    },

    peopleRoutes: function() {
        Router.showLoading();
        require.ensure([], function () {
            Router.hideLoading();

            require('./app/people/people').show();
        });
    },

    mapRoute: function() {
        // TODO: proper parsing of route components
        var route = document.location.hash.slice(2);
        var sections = route.split('?');
        var path = sections[0];
        var pathSections = path.split('/');
        var module = pathSections[0];

        if(module === '') {
            module = Router.defaultModule;
        }

        // Split points for dynamic loading
        // Because of static analysis, must be hard-coded like this
        if(module === 'projects') {
            Router.projectRoutes();
        }

        if(module === 'people') {
            Router.peopleRoutes();
        }

        // TODO: 404 handling
    }
};

window.addEventListener("hashchange", Router.mapRoute, false);
window.addEventListener("load", Router.mapRoute, false);