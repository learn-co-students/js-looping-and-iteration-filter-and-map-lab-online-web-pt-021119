function driversWithRevenueOver(arr, rev){
  return arr.filter( function (i) {return i.revenue > rev } );
}

function driverNamesWithRevenueOver(arr, rev){
  const revArr = driversWithRevenueOver(arr, rev);
  const nameArr = [];
  for(let i in revArr){
    nameArr.push(revArr[i].name);
  }
  return nameArr;
}

function exactMatch(arr, obj){
  const newArr = [];
  for(let i in arr) {
    if(arr[i].name === Object.values(obj)[0] || arr[i].revenue === Object.values(obj)[0]){
    newArr.push(arr[i]);
      }
    }
  return newArr;
}

function exactMatchToList(arr, obj){
  const newArr = [];
  for(let i in arr) {
    if(arr[i].name === Object.values(obj)[0] || arr[i].revenue === Object.values(obj)[0]){
    newArr.push(arr[i].name);
      }
    }
  return newArr;
}
