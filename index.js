const drivers = [ { name: 'Sally',   revenue: 400 },
{ name: 'Annette', revenue: 200 },
{ name: 'Jim',     revenue: 150 } ];

function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(function (r) { return r.revenue > revenue });
}

function driverNamesWithRevenueOver(drivers, revenue) {
    const listDrivers = driversWithRevenueOver(drivers, revenue);
    const newArray = [];
    for (const e in listDrivers) {
        newArray.push(listDrivers[e].name)
    }; 

    return newArray;
}

function exactMatch(drivers, object) {
    const newDrivers = drivers.filter(function (driver) {return driver.name === object.name || driver.revenue === object.revenue});
    return newDrivers;
}

function exactMatchToList(drivers, object) {
    let newArray = exactMatch(drivers, object);
    return newArray.map(function (o) {return o.name});  
}



//     return drivers.filter(function (driver) {
//      const newArray = driver.name;
//      return newArray;
//     } );
// }