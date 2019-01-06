// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign( {}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
      driver[key] = value;
      return driver;
}

function deleteFromDriverByKey(driver, key) {
  const obj2 = Object.assign( {}, driver );
  delete obj2[key];
  return obj2;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
