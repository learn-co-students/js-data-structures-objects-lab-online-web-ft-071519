const driver = { foo: "bar" };

function updateDriverWithKeyAndValue(object, key, value) {
    return Object.assign({}, object, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    let object = Object.assign(driver, { [key]: value });
    return object
}

function deleteFromDriverByKey(driver, key) {
    const newObject = Object.assign({}, driver);
    delete newObject[key];
    return newObject
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}