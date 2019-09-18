// Code your solution here:

function driversWithRevenueOver(name, amount) {
  return name.filter(function(person) {
    return person.revenue > amount
  });
}

function driverNamesWithRevenueOver(name, amount) {
  return driversWithRevenueOver(name, amount).map(function (person) {
      return person.name;
    });
}

function exactMatch (drivers, matcher) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in matcher) {
      matches = driver[key] === matcher[key];
    }

    return matches;
  });
}

function exactMatchToList (drivers, matcher) {
  return exactMatch(drivers, matcher)
    .map(function (driver) {
      return driver.name;
    });
}
