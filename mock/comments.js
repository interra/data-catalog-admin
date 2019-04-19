const jsf = require('json-schema-faker');
const fs = require('fs');
const util = require('util');
const apiDir = 'api';

const counts = {
  comment: 115
}

jsf.option({
  optionalsProbability: .7,
  alwaysFakeOptionals: true
});

jsf.extend('faker', () => require('faker'));

Object.keys(counts).map((col) => {
  let collection = col;
  collection = [];
  const dir = `${apiDir}/${col}`;
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
  const count = counts[col];
  const schemaFile = `./schemas/${col}.json`;
  const schema = fs.readFileSync(schemaFile, 'utf8');
  let x = 0;
  let file = "";
  while (count > x) {
    const excitingNewMock = jsf.generate(JSON.parse(schema));
    file = `${apiDir}/${col}/${excitingNewMock.identifier}.json`;
    fs.writeFileSync(file, JSON.stringify(excitingNewMock, null, 2));
    collection.push(excitingNewMock);
    x++
  }
  fs.writeFileSync(`${apiDir}/${col}.json`, JSON.stringify(collection, null, 2));

});
