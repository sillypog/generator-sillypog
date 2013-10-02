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
		clean: ['build'],
		copy: {
			main: {
				files: [
					{src: 'bower_components/jquery/jquery.min.js', dest: 'build/js/jquery.min.js'},
					{cwd: 'src/assets', src:['**/*.*'], dest:'build/assets', expand:true}
				]
			},
			dev: {
				files: [
					{ cwd: 'src/js', src: ['*.js'], dest: 'build/js', filter: 'isFile', expand:true}
				]
			}
		},
		concat: {
	      js: {
	      	options: {
	        	separator: ';\n\n'
	      	},
	        src: ['src/js/*.js'],
	        dest: 'build/js/<%%= _.slugify(pkg.name) %>.js'
	      }
	    },
	    uglify: {
	      options: {
	        banner: '//! <%%= _.slugify(pkg.name) %> <%%= grunt.template.today("dd-mm-yyyy") %> \n'
	      },
	      dist: {
	        files: {
	          '<%%= concat.js.dest %>': ['<%%= concat.js.dest %>']
	        }
	      }
	    },
	    watch: {
	    	files: ['src/**'],
	    	tasks: ['dev']
	    },
	    connect: {
	    	server: {
	    		options: {
	    			port: 9001,
	    			keepalive: true,
	    			hostname: '',
	    			base: 'build'
	    		}
	    	} 
	    }
	});

	// load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// Default task(s).
	grunt.registerTask('common', ['preprocess', 'copy:main']);

	grunt.registerTask('dev', ['env:dev', 'copy:dev', 'common']);
	grunt.registerTask('prod', ['env:prod', 'clean', 'common', 'concat', 'uglify']);

	grunt.registerTask('default', ['dev']);
};