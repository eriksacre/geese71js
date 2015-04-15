# Geese71

This is the starter project for a rich JavaScript client using:

* React.js
* React-router
* webpack

The project is designed for big-ish applications, i.e.

* Code and assets are grouped per application module (projects, people)
* Modules are loaded dynamically, the first time they are used (see router.js)
* Mocha is used for testing with JSDom to allow browser-less testing

## To do

* Flux

## Developing

* npm install
* npm start

Run tests: npm test

Note: Required Node 0.10.x. Tests do not work with newer versions.

## Building for production

webpack -p

## Sources

* https://github.com/petehunt/react-webpack-template
* https://github.com/petehunt/webpack-howto
