const {getChangedFilesForRoots, findRepos} = require('jest-changed-files');
const diff = require('jest-diff');
const {
    extract,
    strip,
    parse,
    parseWithComments,
    print,
} = require('jest-docblock');
const getType = require('jest-get-type');

// Functions in jest-changed-files
getChangedFilesForRoots(['./'], {
    lastCommit: true,
}).then(result => console.log(result.changedFiles));

findRepos(['../../../']).then(repos => {
    console.log(repos.findRepos);
});

// Functions in jest-diff
const a = {a: {b: {c: 5}}};
const b = {a: {b: {c: 6}}};

const result = diff(a, b);

console.log(result);

// functions in jest-docblock
const code = `
/**
 * Everything is awesome!
 *
 * @everything is:awesome
 * @flow
 */

 export const everything = Object.create(null);
 export default function isAwesome(something) {
   return something === everything;
 }
`;

const docblock = extract(code);
console.log(docblock);

const stripped = strip(code);
console.log(stripped);

const pragmas = parse(docblock);
console.log(pragmas);

const parsed = parseWithComments(docblock);
console.log(parsed);

console.log(print({pragmas, comments: 'hi!'}));

// Function in jest-get-type
const array = [1, 2, 3];
const nullValue = null;
const undefinedValue = undefined;

console.log(getType(array) + ' ' + getType(nullValue) + ' ' + getType(undefinedValue));