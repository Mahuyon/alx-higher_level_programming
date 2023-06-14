#!/usr/bin/node
const eya = parseInt(process.argv[2]);
if (Number.isNaN(eya)) {
  console.log('Missing size');
} else {
  for (let i = 0, eko; i < eya; i++) {
    eko = '';
    for (let j = 0; j < eya; j++) {
      eko += 'X';
    }
    console.log(eko);
  }
}
