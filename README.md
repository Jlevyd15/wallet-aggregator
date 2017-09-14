# react boilerplate with redux and Express dev server

This boilerplate is based on Create React App with some added features 

- Express dev server with Passport based JWT authentication 
- React Redux with ImmutableJS
- React Router for routing
- robust folder structure

## Table of Contents

- [Folder Structure](#folder-structure)
- [Scripts](#updating-to-new-releases)

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  frontend
    config/
    public/
        index.html
        favicon.ico
    scripts/
    test/
    src/
      App.css
      App.js
      App.test.js
      index.css
      index.js
      logo.svg
  server
      bin/
      public/
      routes/
      views/
      app.js
      config.js
```

## Scripts

### Start

start webpack and development server

```
npm start
```

### Test

run tests via Jest

```
npm test
```

### Build

build for production

```
npm build
```

Built with Create React App
https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md