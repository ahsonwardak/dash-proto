PM Dashboard
============

## Development
This project utilizies Gulp to manage automating repetative tasks like:
* Image manipulation
* Compiling SASS
* Bundling Javascript files
* Browser-Syncing

### Install Node (via Homebrew)
```bash
brew install node
```

### Install npm dependencies
```bash
npm install
```

### Development
```bash
./node_modules/gulp/bin/gulp.js
```
This will start up a node server on localhost:3000 to serve the static assets, open up your default browser, and sync any changes to when an update is made. Cool stuff.

### Configuration
All paths and plugin settings have been abstracted into a centralized config object in `gulp/config.js`. Adapt the paths and settings to the structure and needs of your project.

### For Government Reviewers
Follow the instructions above to create your own Build folder of views/HTML pages.  Alternatively, you can simply browse/download the Build folder to view the front-end prototype.  The project is no longer live, as it was meant to be a prototype for a future projects around digital analytics for IT projects in the Federal Government.
