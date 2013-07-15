/*
 * grunt-show-config
 *
 * Copyright (c) 2013 Mark Parolisi
 * Licensed under the MIT license.
 */

/*global module */
module.exports = function (grunt) {
    "use strict";
    grunt.initConfig({
        jshint: {
            app: [
                'Gruntfile.js',
                'tasks/*.js'
            ]
        }
    });

    grunt.loadTasks('tasks');

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', ['jshint']);
};