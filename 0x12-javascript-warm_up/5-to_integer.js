#!/usr/bin/node
const eya = parseInt(process.argv[2]);
if (Number.isNaN(eya)) {
  console.log('Not a number');
} else {
  console.log('My number: ' + eya);
}
