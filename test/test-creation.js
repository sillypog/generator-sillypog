/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('sillypog generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('sillypog:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
	  '.gitignore',
      '.jshintrc',
	  '.ruby-gemset',
	  '.ruby-version',
	  'Gemfile',
	  'Gruntfile.js',
	  'bower.json',
	  'src/favicon.ico',
	  'src/index.html',
	  ['src/asset_packages/js/common.js.pkg', /src\/js\/greeting.js/],
	  ['src/js/greeting.js', /console\.log\('Welcome to Test Site'\);/],
	  'src/scss/test-site.scss'
    ];

    helpers.mockPrompt(this.app, {
      'siteName': 'Test Site'
    });
    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });
});
