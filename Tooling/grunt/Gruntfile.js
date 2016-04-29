module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
			options: {
				style: "compressed"
			},
			dist: {
				files: {
					'css/style.css' : 'sass/style.scss'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		},
		uglify: {
			my_target: {
				files: {
					'dest/main.min.js': ['js/*.js']
				}	
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');


	grunt.registerTask('default', ['sass']);
	grunt.registerTask('watcher', ['watch']);
	grunt.registerTask('ugly', ['uglify']);
}