[![Stories in Ready](https://badge.waffle.io/malpercio/sails-hook-mlprciographql.png?label=ready&title=Ready)](https://waffle.io/malpercio/sails-hook-mlprciographql)
[![Build Status][build-image]][build-url]

# sails-hook-mlprciographql

## About
A [sails](http://sailsjs.org/) hook aimed at simplifying GraphQL integration.

## Installation

```
npm install --save sails-hook-mlprciographql
```

## Usage

After installing, (and configuring the database to your liking) you can summon ´sails.graphql´ to receive a [Promise](https://developer.mozilla.org/es/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Promise) like so:

```javascript
//For the default controller
index(req, res) {
    sails.graphql(req)
    .then((result) => {
      //Very important statements
      return res.json(result.data);
    })
    .catch((err)=>{
      //Oops.
      res.send(500, err);
    });
  }
```
[build-image]: https://travis-ci.org/malpercio/sails-hook-mlprciographql.svg
[build-url]: https://travis-ci.org/malpercio/sails-hook-mlprciographql
