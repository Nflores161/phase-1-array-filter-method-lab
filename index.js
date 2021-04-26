// Code your solution here

function findMatching(drivers, string) {
  return drivers.filter(matchingDriver => matchingDriver.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(driversName => driversName.toLowerCase().indexOf(string.toLowerCase()) === 0)
}

function matchName(drivers, string) {
  return drivers.filter(matchingDriver => matchingDriver.name === string)
}