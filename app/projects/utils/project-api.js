var ProjectAPI = {
    fetchAll: function(callback) {
        API.get('/api/projects', function(projects) {
            callback(projects);
        });
    },

    setFavourite: function(id) {
        API.put('/api/projects/favourites/' + id);
    },

    clearFavourite: function(id) {
        API.delete('/api/projects/favourites/' + id);
    }
};

// TODO: put in a proper helper file + support sending JSON
var API = {
    get: function(url, callback) {
        this._xhr('get', url, callback);
    },

    put: function(url) {
        this._xhr('put', url);
    },

    delete: function(url) {
        this._xhr('delete', url);
    },

    _xhr: function (verb, url, successHandler, errorHandler) {
        var xhr = new XMLHttpRequest();
        xhr.open(verb, url, true);
        xhr.onreadystatechange = function () {
            var status;
            var data;
            if (xhr.readyState == 4) {
                status = xhr.status;
                if (status == 200) {
                    data = JSON.parse(xhr.responseText);
                    successHandler && successHandler(data);
                } else {
                    errorHandler && errorHandler(status);
                }
            }
        };
        xhr.send();
    }
};

module.exports = ProjectAPI;