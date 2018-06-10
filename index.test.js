const assert = require('assert');
const SeeRealmRoyale = require('./index');
const srr = new SeeRealmRoyale();
const realmRoyaleData = require('./realm-royale-data.json');

const randomClass = srr.getRandomClass();
console.log(randomClass);
assert(realmRoyaleData.classes.includes(randomClass));

const randomForge = srr.getRandomForge();
console.log(randomForge);
assert(realmRoyaleData.forges.includes(randomForge));

const randomZone = srr.getRandomZone();
console.log(randomZone);
assert(realmRoyaleData.zones.includes(randomZone));