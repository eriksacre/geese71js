# Geese71

This is the starter project for a rich JavaScript client using:

* React.js
* React-router
* Webpack

The project is designed for big-ish applications, i.e.

* Code and assets are grouped per application module (projects, people)
* Modules are loaded dynamically, the first time they are used (see router.js)
* Mocha is used for testing with JSDom to allow browser-less testing

**This code base is strictly experimental!**

## To do

* Authentication for subscriptions
* Lots and lots of cleanup
* When to unload store data and cancel subscription
* Proper error handling, especially related to API calls

## Developing

* npm install
* npm start

Run tests: npm test

Also 'npm install' and 'npm start' from within server folder to start the demo server on port 8000.

Note: Requires io.js. (JSDom 5.x.x requires it)

## Building for production

webpack -p

## Inspiration

* https://github.com/petehunt/react-webpack-template
* https://github.com/petehunt/webpack-howto

## License

Geese71js is released under the [MIT license](http://opensource.org/licenses/MIT).