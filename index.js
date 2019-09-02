// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){
    return driver.revenue > revenue
  });
}

function driverNamesWithRevenueOver(drivers, revenue){
  let driverObjs = driversWithRevenueOver(drivers, revenue);
  return driverObjs.map(function(driver){
    return driver.name
  });
}

function exactMatch(drivers, property){
  return drivers.filter(function(driver){
      let key = Object.keys(property)[0]
      if(driver[key] === property[key]){
        return driver;
      }
  });
}

function exactMatchToList(drivers, property){
  let driverObjs = exactMatch(drivers, property);
  return driverObjs.map(function(driver){
    return driver.name
  });
}
