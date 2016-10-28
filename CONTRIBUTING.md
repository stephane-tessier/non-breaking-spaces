# Contribute guide

Your help is welcome to improve this module!

## Fork it

Fork this git repository and work on your fork before add your pull request.

You can directly edit files on github and add a new pull request.


### Install the project

```bash
npm install
```

### Run test

```bash
npm test
```

This command include linting and fonctional test but you can use it separatly.

#### Run linting

```bash
npm run lint
```

[ESLint](https://github.com/eslint/eslint) is used for identifying and reporting on patterns, it will check recursively any `.js` file in `./src/`

#### Run tape (functional test)

```bash
npm run tape
```

[Tape](https://github.com/substack/tape) is used for running tests located in `./test/`


### Build docs

```bash
npm run doc
```

[JSDoc 3](https://github.com/jsdoc3/jsdoc) is used for generating static html documentation in the `./docs/` folder

### Build dist

```bash
npm run dist
```

[Webpack](https://github.com/webpack/webpack) is used for bundling assets and [Babel JS](https://github.com/babel/babel) is used as an ECMAScript 6 to ECMAScript 5 compiler.

To watch for changes in files while development :

```bash
npm run dev
```
