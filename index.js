// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, k, v) {
    const newDriver = { ...driver };
    newDriver[k] = v;
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, k, v) {
    driver[k] = v; 
    return driver;
}

function deleteFromDriverByKey(driver, k) {
    const newDriver = Object.assign({}, driver);
    delete newDriver[k];
    return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}