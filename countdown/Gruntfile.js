module.exports = function(grunt) {

    grunt.initConfig({
        meta: {},
        compass: {
            dist: {
                options: {
                    specify: 'css/styles.scss',
                    sassDir: 'css',
                    cssDir:  '../css'
                }
            }
        },
        cssmin: {
            main: {
                src: "../css/styles.css",
                dest: "../css/styles.min.css"
            }
        },
        concat: {
            js: {
                src: [
                    'js/app.js',
                    'js/objects/*.js'
                ],
                dest: 'js/_uglify/scripts.js'
            }
        },
        lint: {},
        uglify: {
            options: {
                mangle: false,
                preserveComments : 'some',
            },
            js: {
                src: 'js/_uglify/scripts.js',
                dest: '../js/scripts.min.js'
            }
        },
        watch: {
            js : {
                files: ['js/*.js','js/objects/*.js'],
                tasks: ['js']
            },
            css : {
                files: ['css/**/*.{scss,sass,css}'],
                tasks: ['css']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                newcap: false,
                globals: {
                    jQuery: true,
                    _gaq: true
                }
            },
            all: ['Gruntfile.js', 'js/*.js', 'js/objects/*.js']
        }
    });


    grunt.registerTask('css', ['compass', 'cssmin'] );
    grunt.registerTask('js', ['concat:js', 'uglify:js'] );
    grunt.registerTask('default', ['css', 'js', 'watch']);

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

};