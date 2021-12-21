# aws-sns-message-attributes [![CircleCI](https://circleci.com/gh/shelfio/aws-sns-message-attributes/tree/master.svg?style=svg)](https://circleci.com/gh/shelfio/aws-sns-message-attributes/tree/master) ![](https://img.shields.io/badge/code_style-prettier-ff69b4.svg) [![npm (scoped)](https://img.shields.io/npm/v/@shelf/aws-sns-message-attributes.svg)](https://www.npmjs.com/package/@shelf/aws-sns-message-attributes)

> Transform JSON into AWS SNS message attributes format. See [1](https://docs.aws.amazon.com/sns/latest/dg/sns-message-attributes.html), [2](https://docs.aws.amazon.com/sns/latest/dg/sns-subscription-filter-policies.html)

## Install

```
$ yarn add @shelf/aws-sns-message-attributes
```

## Usage

```js
const {transformMessageAttributes} = require('@shelf/aws-sns-message-attributes');

transformMessageAttributes({
  string: 'hello',
  array: ['hello', 'world'],
  number: 1,
  bool: true,
});

/*
{
  string: {DataType: 'String', StringValue: 'hello'},
  array: {DataType: 'String.Array', StringValue: '["hello","world"]'},
  number: {DataType: 'Number', StringValue: 1},
  bool: {DataType: 'String', StringValue: 'true'},
}
 */
```

_Note:_ This library does not support binary values

## Publish

```sh
$ git checkout master
$ yarn version
$ yarn publish
$ git push origin master --tags
```

## License

MIT © [Shelf](https://shelf.io)
