var dest = "./build";
var src = './src';

module.exports = {
  browserSync: {
    server: {
      baseDir: [dest, src]
    },
    files: [
      dest + "/**",
      "!" + dest + "/**.map"
    ]
  },
  sass: {
    src: src + "/sass/**/*.scss",
    dest: dest + "/assets/css/"
  },
  fonts: {
    src: src + "/fonts/**/*",
    dest: dest + "/assets/fonts/"
  },
  images: {
    src: src + "/images/**",
    dest: dest + "/assets/images"
  },
  markup: {
    src: src + "/htdocs/*.html",
    dest: dest,
    watch: [src + "/htdocs/**", src + "/data/**"],
    swig_opts: {
      defaults: {
        cache: false
      }
    }
  },
  browserify: {
    debug: true,
    extensions: [],
    bundleConfigs: [{
      entries: './src/javascript/app.js',
      dest: dest + "/assets/js/",
      outputName: 'app.js'
    }]
  }
};
