module.exports = function (grunt) {
    "use strict";

    // Config...
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
                files: ['./public/modules/**/*.js', '!./public/scripts.js'],
                tasks: ['jshint', 'concat:modules', 'sass:dev']
            },
            css: {
                files: '**/*.scss',
                tasks: ['sass:dev'],
                options: {
                  livereload: true,
                },
              },
        },
        sass: {
            dev: {
                options: {
                    compress: false,
                    sourcemap: 'none'
                 },
                files: {
                    './public/css/style.css' : './public/sass/style.scss'
                }
            }
        },
        concat: {
            modules: {
                src: ['./public/modules/**/*.js', '!./public/scripts.js'],
                dest: './public/scripts.js'
            }
        },
        jshint: {
            all: [
                'public/**/*.js',
                '!public/scripts.js'
            ]
        }
    });
    // Load tasks...
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    // Default task.
    grunt.registerTask('default', ['concat', 'sass:dev']);
    grunt.registerTask('dev', ['concat', 'sass:dev', 'watch']);
};