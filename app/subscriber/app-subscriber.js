var faye = require('faye');
var AppDispatcher = require('../dispatcher/app-dispatcher');

var client = new faye.Client('/ws');
var AppSubscriber = {
    subscribe: function(channel) {
        client.subscribe(channel, function (message) {
            AppDispatcher.dispatch(message);
        });
    }
};

module.exports = AppSubscriber;