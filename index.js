const getRandomInt = require('./random');
const realmRoyaleData = require('./realm-royale-data.json');

class SeeRealmRoyale {
  getRandomClass() {
    const classesLength = realmRoyaleData.classes.length;
    const randomClass = getRandomInt(classesLength)
    return realmRoyaleData.classes[randomClass];
  }

  getRandomForge() {
    const forgesLength = realmRoyaleData.forges.length;
    const randomForge = getRandomInt(forgesLength)
    return realmRoyaleData.forges[randomForge];
  }

  getRandomZone() {
    const zonesLength = realmRoyaleData.zones.length;
    const randomZone = getRandomInt(zonesLength)
    return realmRoyaleData.zones[randomZone];
  }
}

module.exports = SeeRealmRoyale;
