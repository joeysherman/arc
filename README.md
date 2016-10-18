<img src="https://cloud.githubusercontent.com/assets/3068563/19393134/ddc11478-9209-11e6-82be-7107cf0ec88e.png" height="100">

[![JS Standard Style][standard-image]][standard-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][codecov-image]][codecov-url]

**ARc** (Atomic React) can be a progressive boilerplate, as much as a set of components or a project's structure proposal based on [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/). You choose how to use it: from a single component to the whole philosophy.

See the [demo](https://diegohaz.github.io/arc).

## Branches

### [master](https://github.com/diegohaz/arc)

A minimal boilerplate with Atomic Design components, [Webpack](https://github.com/webpack/webpack) and [react-router v4](https://github.com/ReactTraining/react-router/tree/v4).

### redux (soon)

Master plus [redux](https://github.com/reactjs/redux).

### universal-redux (soon)

Redux plus [Server Side Rendering](https://github.com/reactjs/redux/blob/master/docs/recipes/ServerRendering.md).

### fullstack (soon)

Universal plus REST API.

### yeoman-generator (soon)

Generate components, redux stores, API endpoints and the entire project through a CLI utility (e.g. `$ yo arc:component`).

## Why

I've been a web developer for the past 14 years, and after dealing with IE vs. Netscape wars, `<table>` layouts and flash websites I can say we live now the best moment in web development. Web components are awesome and React makes it better.

React stimulates you to create very small and pure components. However, as your project grows, you will have an increasing components folder. At some point, this will be really huge and hard to maintain.

The [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) approach comes handy to solve this problem. You will have your minimal/stylish components in one folder, pages in another and so on.

## Download

Just clone the repository and remove the `.git` folder:

```sh
$ git clone https://github.com/diegohaz/arc my-app
$ cd my-app
$ rm -rf .git
$ npm install # or yarn
```

## Develop

Once you have installed the dependencies, you can use `npm start` to run a development server or `npm run build` to transpile the code into the `dist` folder.

The source code should be placed in `src`; public/static files should be placed in `public` so they can be included in the build process.

## FAQ

### How do I know if the component I'm creating is an atom, molecule or organism?

You can use the [components](src/components) folder here as an example or refer to the [Pattern Lab Demo](http://demo.patternlab.io/) which this project is based on. Basically, you can think this way:

- An **atom** is a native html tag or a React Component that renders an html tag;
- A **molecule** is a group of atoms;
- An **organism** is a group of atoms, molecules and/or other organisms.

There're cases when, during the development, you do realize that some molecule should be an organism, for example. This boilerplate was designed in a way that makes it easier to move components. You just need to move the component folder to the right place and update the respective `index.js` files (`molecules/index.js` and `organisms/index.js`). Everything else should work.

## License

The MIT License (MIT)

Copyright (c) 2016 [Diego Haz](https://github.com/diegohaz)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

[standard-url]: http://standardjs.com
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square

[travis-url]: https://travis-ci.org/diegohaz/arc
[travis-image]: https://img.shields.io/travis/diegohaz/arc.svg?style=flat-square

[codecov-url]: https://codecov.io/gh/diegohaz/arc
[codecov-image]: https://img.shields.io/codecov/c/github/diegohaz/arc.svg?style=flat-square
