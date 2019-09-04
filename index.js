
function driversWithRevenueOver(collection, number) {
  return collection.filter(function(element) {
    return element.revenue > number;
  });
};

function driverNamesWithRevenueOver(collection, number) {
  const drivers = driversWithRevenueOver(collection, number);
  return drivers.map(function(driver) {
    return driver.name
  });
};

function exactMatch(collection, query) {
  return collection.filter(function(element) {
    return element[Object.keys(query)[0]] == query[Object.keys(query)[0]];
  });
};

function exactMatchToList(collection, query) {
  const drivers = exactMatch(collection, query);
  return drivers.map(function(driver) {
    return driver.name;
  });
};
