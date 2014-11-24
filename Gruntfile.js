module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          cleancss: true,
        },
        files: {
          "public/stylesheets/toy.min.css": "src/less/toy.less"
        }
      },
    },

    watch: {
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['jshint:gruntfile'],
      },
      less: {
        files: ['src/less/**/*.less'],
        tasks: ['less:development', 'curl'],
      }
    },

    curl: {
      'public/html/bootstrap.html': 'http://localhost:3000/bootstrap/prod',
      'public/html/styles.html': 'http://localhost:3000/styles/prod',
      'public/html/landing.html': 'http://localhost:3000/landing/prod',
      'public/html/online-store.html': 'http://localhost:3000/online-store/prod',
      'public/html/our-story.html': 'http://localhost:3000/our-story/prod',
      'public/html/how-it-works.html': 'http://localhost:3000/how-it-works/prod',
    }

  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-curl');

  // Default task(s).
  grunt.registerTask('default', ['less:development', 'curl']);

};
