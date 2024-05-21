#!/usr/bin/node
const request = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films/' + process.argv[2];
request.get(url, function (err, res, body) {
  if (err) {
    console.log(err);
  }
  const resp = JSON.parse(body);
  const charac = resp.characters;
  for (const i of charac) {
    request.get(i, function (err, res, body1) {
      if (err) {
        console.log(err);
      }
      const data = JSON.parse(body1);
      console.log(data.name);
    });
  }
});
