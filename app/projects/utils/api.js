// TODO: A lot. This is really minimal test code, without proper error handling, etc.
module.exports = {
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
