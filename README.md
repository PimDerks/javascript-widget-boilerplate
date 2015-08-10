# JavaScript Widget Boilerplate

## What it does

This is a starting point for building embedabble JavaScript widgets.

## How to use it

The widget itself will ofcourse work in your browser. For developing a widget you need to have some tools installed:

### Tools, languages, libraries and conventions

#### Tools
* [Gulp](http://gulpjs.com/)
* [AutoPrefixer](https://github.com/postcss/autoprefixer)
* [Node.JS](https://nodejs.org)
* [BrowserSync](browsersync.io)

#### Languages
* HTML
* Javascript
* [SASS](http://sass-lang.com/)

#### Libraries
* [CleanSlate](http://cleanslatecss.com)

#### Conventions
* [BEM](https://css-tricks.com/bem-101/)
* [Content First]

### Installation

First make sure you've got Ruby and NodeJS installed. Then proceed as follows:

* Install Gulp (`npm install gulp`)
* Install SCSS_Lint (`gem install scss_lint`)
* Install all packages defined in package.json (`npm install`)
* Install all packages defined in bower.json (`bower install`)

## Options

### Control where widget is inserted.

- By default the widget is inserted after the tag of its `script`-tag. To determine which `script`-tag should be used
(as there might be multiple widgets on a single page) each `script`-tag should have an unique ID. We pass this along to the query-string of the `script`-tags `src`-attribute, e.g. `script.js?id=your-widget-id`.
- The script looks for the ID. If the element found is a `script`-tag, it creates a new `div` and inserts it after the `script`-tag and then inserts the widget. If the element is already a `div`, it inserts the widget inside of the element.
- If no ID is passed along or no element is found for the given ID the script throws an error.

## Credits and information