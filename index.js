// Code your solution here:
function driversWithRevenueOver(driver, num){
  return driver.filter(function(element){
    return element.revenue > num;
  });
}

function driverNamesWithRevenueOver(drivers, num){
  const newDrivers = driversWithRevenueOver(drivers, num);
  return newDrivers.map(function(element){
    return element.name;
  });
}

function exactMatch(drivers, query){
  return drivers.filter(function(element){
    return element[Object.keys(query)[0]] == query[Object.keys(query)[0]];
  });
}

function exactMatchToList(drivers, query) {
  const newDrivers = exactMatch(drivers, query);
  return newDrivers.map(function(driver){
    return driver.name;
  });
};
