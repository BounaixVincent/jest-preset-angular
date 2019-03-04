"use strict";
var _a = require('jest-changed-files'), getChangedFilesForRoots = _a.getChangedFilesForRoots, findRepos = _a.findRepos;
var diff = require('jest-diff');
var _b = require('jest-docblock'), extract = _b.extract, strip = _b.strip, parse = _b.parse, parseWithComments = _b.parseWithComments, print = _b.print;
var getType = require('jest-get-type');
// Functions in jest-changed-files
getChangedFilesForRoots(['./'], {
    lastCommit: true,
}).then(function (result) { return console.log(result.changedFiles); });
findRepos(['../../../']).then(function (repos) {
    console.log(repos.findRepos);
});
// Functions in jest-diff
var a = { a: { b: { c: 5 } } };
var b = { a: { b: { c: 6 } } };
var result = diff(a, b);
console.log(result);
// functions in jest-docblock
var code = "\n/**\n * Everything is awesome!\n *\n * @everything is:awesome\n * @flow\n */\n\n export const everything = Object.create(null);\n export default function isAwesome(something) {\n   return something === everything;\n }\n";
var docblock = extract(code);
console.log(docblock);
var stripped = strip(code);
console.log(stripped);
var pragmas = parse(docblock);
console.log(pragmas);
var parsed = parseWithComments(docblock);
console.log(parsed);
console.log(print({ pragmas: pragmas, comments: 'hi!' }));
// Function in jest-get-type
var array = [1, 2, 3];
var nullValue = null;
var undefinedValue = undefined;
console.log(getType(array) + ' ' + getType(nullValue) + ' ' + getType(undefinedValue));
