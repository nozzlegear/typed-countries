# typed-countries
An array of the world's countries, complete with full TypeScript declaration support.

## Installation

Install from the NPM registry with NPM itself, or with [Yarn](https://github.com/yarnpkg/yarn):

```sh
# NPM:
npm install typed-countries

# or Yarn:
yarn add typed-countries
```

## Usage

You can import the package with ES6-style imports, or through Node's require:

```js
//ES6-style import
import { countries } from "typed-countries";

//Require
const countries = require("typed-countries").countries;
```

This package also uses an ES6-style default export:

```js
//ES6-style default import
import countries from "typed-countries";

//Require
const countries = require("typed-countries").default;
```