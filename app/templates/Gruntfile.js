// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>

module.exports = function(grunt){

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		env: {
			dev: { NODE_ENV: 'DEVELOPMENT'},
			prod: { NODE_ENV: 'PRODUCTION'}
		},
		preprocess: {
			index: {
				src: 'src/index.html',
				dest: 'build/index.html'
			}
		},
		sass: {
			dist: {
				files: { 'build/css/<%%= _.slugify(pkg.name) %>.css': 'src/scss/<%%= _.slugify(pkg.name) %>.scss'}
			}
		},
		/*concat: {
	      js: {
	      	options: {
	        	separator: ';\n\n'
	      	},
	        src: ['src/js/*.js'],
	        dest: 'bin-dev/<%%= pkg.name %>.js'
	      }
	    },
	    uglify: {
	      options: {
	        banner: '//! <%%= pkg.name %> <%%= grunt.template.today("dd-mm-yyyy") %> \n'
	      },
	      dist: {
	        files: {
	          'build/<%%= pkg.name %>.js': ['<%%= concat.js.dest %>']
	        }
	      }
	    },*/
	    watch: {
	    	files: ['src/**'],
	    	tasks: ['dev']
	    },
	    connect: {
	    	server: {
	    		options: {
	    			port: 9001,
	    			keepalive: true,
	    			hostname: ''
	    		}
	    	} 
	    }*/
	});

	// load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// Custom tasks
	grunt.registerTask('log','Output message when build complete', function(){
		grunt.log.writeln('Build complete');
	})

	// Default task(s).
	grunt.registerTask('build', ['preprocess', 'log']);

	grunt.registerTask('dev', ['env:dev', 'build']);
	grunt.registerTask('prod', ['env:prod', 'build']);
	grunt.registerTask('default', ['dev']);
};