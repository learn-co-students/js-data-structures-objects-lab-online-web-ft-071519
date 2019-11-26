// Write your solution in this file!


const driver = {}

function updateDriverWithKeyAndValue(driver,key,value) {
    return Objects.assign({}, driver, { [key]: value })
}

function destructivelyUpdateDriverWithKeyAndValue(driver,key,Value) {
    driver[key] = value; 
    return driver; 
}

function deleteFromDriverByKey(driver, key) {
    const newObj = Object.assign({}, driver)

    delete newObj[key]

    return newObj
}

function destructivelyDeleteFromDriverByKey(driver,key) {
    delete driver[key]

    return driver
}