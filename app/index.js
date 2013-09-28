'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var _ = require('underscore.string');

var SillypogGenerator = module.exports = function SillypogGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(SillypogGenerator, yeoman.generators.Base);

SillypogGenerator.prototype.greet = function greet() {
   console.log(this.yeoman);
}

SillypogGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  var prompts = [{
    name: 'siteName',
    message: 'What would you like to call your site?',
  }];

  this.prompt(prompts, function (props) {
    this.siteName = props.siteName;

    cb();
  }.bind(this));
};

SillypogGenerator.prototype.app = function app() {
  this.mkdir('src');
  this.mkdir('src/scss');
  this.mkdir('src/js');
  this.mkdir('src/assets');
  this.mkdir('build');

  this.template('_package.json', 'package.json');
  this.template('_bower.json', 'bower.json');
  this.template('Gruntfile.js', 'Gruntfile.js');
  this.template('_index.html', 'src/index.html');

  this.copy('main.scss', 'src/scss/'+_.slugify(this.siteName)+'.scss');
};

SillypogGenerator.prototype.ruby = function ruby() {
  this.copy('Gemfile', 'Gemfile');
  this.copy('.ruby-version', '.ruby-version');
  this.template('.ruby-gemset', '.ruby-gemset');
}

/*SillypogGenerator.prototype.runtime = function runtime() {
  this.copy('bowerrc', '.bowerrc');
  this.copy('gitignore', '.gitignore');
  this.copy('jshintrc', 'jshintrc');
};*/
