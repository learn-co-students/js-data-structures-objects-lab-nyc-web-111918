// Write your solution in this file!
const driver = {'name' : 'sam'}

function updateDriverWithKeyAndValue(driver, key, value) {
  const updatedDriver = {...driver};
  updatedDriver[key] = value;
  return updatedDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const removeDriver = {...driver};
  delete removeDriver[key]
  return removeDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}
