// Write your solution in this file!
  let driver = {
    name: 'Matt',
    address: '33-06 31st street'
  }
function updateDriverWithKeyAndValue(driver, key, value) {
  const newObj = { ...driver };
    newObj[key] = value;
    return newObj;

}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  return delete driver.key;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  return delete driver[key];
}
