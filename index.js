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
