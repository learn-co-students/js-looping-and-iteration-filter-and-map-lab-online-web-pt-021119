function driversWithRevenueOver(arr, amount) {
    let newArray = arr.filter(driver => driver[`revenue`] > amount);
    return newArray;
}

function driverNamesWithRevenueOver(arr, amount) {
    let newArray = driversWithRevenueOver(arr, amount)
    let matching = newArray.map(driver => driver[`name`])
    return matching
}

function exactMatch(array, attribute) {
    let newArray = array.filter(driver => driver.name === attribute.name || driver.revenue === attribute.revenue);
    return newArray;
};


function exactMatchToList(array, attribute) {
    let newArray = exactMatch(array, attribute)
    let answer = newArray.map(driver => driver['name']);
    return answer;
};
