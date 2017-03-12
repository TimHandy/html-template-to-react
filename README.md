# Template to React

A conversion of an HTML template to a React App.

- Chopped up the sections from the template and created React components from them.
- Express server, serves up views/index.hjs, src/index.js renders src/container/App.js
- Webpack 2, build outputs to public/dist/bundle.js. Requires Express to view, ie. this does not generate static output files. Webpack-dev-server not used on this one.

## Development

$ npm start

That will run the build and then the dev-server which is just Express, so not really a dev-only server.

App is then accesible on http://localhost:3000
