// Write your solution in this file!
const driver = {};
function updateDriverWithKeyAndValue(driver, key, val){
  const obj = {...driver};
  obj[key]= val;
  return obj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, val){
  driver[key]= val;
  return driver;
}

function deleteFromDriverByKey(driver, name){
  const obj = {...driver};
  delete obj.name;
  return obj;
}
function destructivelyDeleteFromDriverByKey(driver, name){
  delete driver.name;
  return driver;
}
