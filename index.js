let driver = {};

function updateDriverWithKeyAndValue(object, key, value) {
  let newObject = Object.assign({}, driver)
  newObject[key] = value
  return newObject;
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
}

function deleteFromDriverByKey(driver, key) {
    let cloneObject = Object.assign({}, driver);
    delete cloneObject[`${key}`];
    return cloneObject;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[`${key}`];
  return driver
}