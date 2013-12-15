# generator-sillypog [![Build Status](https://secure.travis-ci.org/sillypog/generator-sillypog.png?branch=master)](https://travis-ci.org/sillypog/generator-sillypog)

A static website site generator for [Yeoman](http://yeoman.io).

* Uses grunt-asset-packager to manage javascript builds for development and production sites. All assets are copied to build folder for easy deploy.
* Grunt configuration provides out of the box support for Sass. The generator includes Ruby environment files and a Gemfile to allow Sass installation with `bundle install`.
* jQuery is included through Google's CDN, with a local copy as backup in case this can't be reached.

## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-sillypog from npm, run:

```
$ npm install -g generator-sillypog
```

Finally, initiate the generator:

```
$ yo sillypog
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
