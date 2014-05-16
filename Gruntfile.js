module.exports = function(grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({

    sass: {
      dist: {
        files: {
          'public/main.css': 'stylesheets/main.sass',
        }
      }
    },

    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          "public/index.html": ["src/templates/*.jade"]
        }
      }
    },


    watch: {
      src: {
        files: ['src/*.js', 'src/templates/*.jade', 'stylesheets/*.sass'],
        tasks: ['default'],
        options: {
          livereload: true
        }
      }
    }       

  });

  grunt.registerTask('default',  ['sass', 'jade']);
};