function driversWithRevenueOver(array, amount){
  let newArray = array.filter(driver => driver['revenue']>amount);
  return newArray;
};

function driverNamesWithRevenueOver(array, amount){
  let newArray = driversWithRevenueOver(array, amount)
  let answer = newArray.map(driver => driver['name']);
  return answer;
};

function exactMatch(array, attribute){
  let newArray = array.filter(driver => driver.name===attribute.name || driver.revenue===attribute.revenue);
  return newArray;
};

function exactMatchToList(array, attribute){
  let newArray = exactMatch(array, attribute)
  let answer = newArray.map(driver => driver['name']);
  return answer;
};

// function exactMatch(array, attribute){
//   let tempKey = Object.keys(attribute)[0];
//   let tempValue = Object.values(attribute)[0];
//   let newArray = array.filter(driver => driver[tempKey]===tempValue);
//   return newArray;
// };
