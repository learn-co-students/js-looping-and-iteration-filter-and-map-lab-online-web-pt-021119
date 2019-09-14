// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  let newDrivers = drivers.filter(function(driver) {
    return driver.revenue > revenue;
  })

  return newDrivers;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let newDrivers = drivers.filter(function(driver) {
    return driver.revenue > revenue;
  }).map(function(driver) { return driver.name });

  return newDrivers;
}

function exactMatch(drivers, obj) {
  let newDrivers = drivers.filter(function(driver) {
    return driver[Object.keys(obj)[0]] === Object.values(obj)[0];
  })

  return newDrivers;
}

function exactMatchToList(drivers, obj) {
  let newDrivers = drivers.filter(function(driver) {
    return driver[Object.keys(obj)[0]] === Object.values(obj)[0];
  }).map(function(x) {
    return x.name;
  })

  return newDrivers;
}
