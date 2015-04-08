# Geese71

This is the starter project for a rich JavaScript client using:

* React.js
* webpack

The project is designed for big-ish applications, i.e.

* Code and assets are grouped per application module (projects, people)
* Modules are loaded dynamically, the first time they are used
* Jest is used for testing

## To do

* Find a real client-side router that can plug into the dynamic load mechanism
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
