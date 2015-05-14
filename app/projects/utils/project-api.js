var API = require('./api');

module.exports = {
    fetchAll: function(callback) {
        API.get('/api/projects', function(projects) {
            callback(projects);
        });
    },

    setFavourite: function(id) {
        API.put('/api/projects/' + id + '/favourite');
    },

    clearFavourite: function(id) {
        API.delete('/api/projects/' + id + '/favourite');
    }
};
