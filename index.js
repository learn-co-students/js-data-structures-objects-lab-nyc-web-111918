// Write your solution in this file!
driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  newDriver = { ...driver }

  newDriver[key] = value

  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value

  return driver
}

function deleteFromDriverByKey(driver, key) {
  let newerDriver = Object.assign({}, driver)

  delete newerDriver[key]

  return newerDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]

  return driver
}
