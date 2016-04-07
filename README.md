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
gulp
```
This will start up a node server on localhost:3000 to serve the static assets, open up your default browser, and sync any changes to when an update is made. Cool stuff.

### Configuration
All paths and plugin settings have been abstracted into a centralized config object in `gulp/config.js`. Adapt the paths and settings to the structure and needs of your project.
