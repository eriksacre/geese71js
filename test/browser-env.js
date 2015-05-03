var jsdom = require('jsdom');

module.exports = function() {
    global.document = jsdom.jsdom('<!DOCTYPE html><html><body></body></html>');
    global.window = document.defaultView;
};