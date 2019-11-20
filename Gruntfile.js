module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Watch task for changes
        watch: {
            css: {
                files: '/src/scss/**/*.scss',
                tasks: ['sass']
            },
        },

        //SASS
        sass: {
            dist: {
             options: {
                style: 'compressed'
              },
              files: {
                'src/index.css': 'src/scss/index.scss'
              }
            }
        },

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass']);
    grunt.registerTask('dev', ['watch']);

};
