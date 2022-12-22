const YAML = require('yaml');
const fs = require('fs');

const str = fs.readFileSync('app.yml', 'utf-8');
const doc = YAML.parseDocument(str);
// console.log(JSON.stringify(doc));

// doc.add(doc.createNode({projectId:"abcd"}));
// doc.add(doc.createPair("projectId", "abcde"));
console.log(doc.toJS().projectId);
fs.writeFileSync('app2.yml', doc.toString());