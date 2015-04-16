var jsdom = require('jsdom');

var BrowserEnv = function() {
    global.document = jsdom.jsdom('<!DOCTYPE html><html><body></body></html>');
    global.window = document.defaultView;
}

module.exports = BrowserEnv;