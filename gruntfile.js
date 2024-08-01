module.exports = function(grunt) {

    
    grunt.initConfig({
  
   
      less: {
        development: {
          files: {
            'dist/css/styles.css': 'src/less/styles.less'  
          }
        }
      },
  
    
      uglify: {
        my_target: {
          files: {
            'dist/js/scripts.min.js': ['src/js/scripts.js']  
          }
        }
      }
  
    });
  

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  

    grunt.registerTask('default', ['less', 'uglify']);
  
  };
  