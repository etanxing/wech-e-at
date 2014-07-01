'use strict';

module.exports = function(grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    app: {
      src: 'app/public/src',
      dist: 'app/public/dist',
      npm: 'node_modules'
    },
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        '<%=app.src%>/app.js',
        '<%=app.src%>/components/**/*.js'
      ]
    },
    compass: {
      options: {
        sassDir: '<%=app.src%>',
        cssDir: '<%=app.src%>',
        specify: '<%=app.src%>/app.scss',
      },
      build: {
        options: {
          environment: 'production'
        }
      },
      dev: {
        options: {
          environment: 'development',
          watch: true
        }
      }
    },
    watch: {
      css: {
        files: ['<%=app.src%>/**/*.{scss,sass}', '!<%=app.src%>/vendor/**/*.{scss,sass}'],
        tasks: ['compass:dev']
      },
      javascript: {
        files: ['<%=app.src%>/**/*.{js,html}', '!<%=app.src%>/vendor/**/*.*'],
        tasks: ['browserify:build']
      }
    }
  });
};
