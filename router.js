
var React = require('react');

function nav() {
    var route = document.location.hash.slice(2);
    if (route === 'projects') {
        require.ensure([], function () {
            require('./app/projects/projects').show();
        });
    } else if (route === 'people') {
        require.ensure([], function () {
            require('./app/people/people').show();
        });
    }
}

window.addEventListener("hashchange", nav, false);
nav();