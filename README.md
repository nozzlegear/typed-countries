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

## Importing

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

## Usage

The export is an array of country objects, which means you can use all of the usual array operations on the country list:

```js
import { countries } from "typed-countries";

const usa = countries.find(c => c.iso === "US");

console.log(usa); 
// {
//     iso: 'US',
//     name: 'United States',
//     hasPostalCodes: true,
//     states: [
//         { 
//             iso: 'AL', 
//             name: 'Alabama' 
//         },
//         ...
//     ],
//     zipRegex: "^\\d{5}([\\-]\\d{4})?$"
// }
```

If you're using TypeScript, you can also import the Country and State interfaces:

```js
import { countries, Country, State } from "typed-countries";

const usa: Country = countries.find(c => c.iso === "US");
const iowa: State = usa.states.find(c => c.iso === "IA");
```