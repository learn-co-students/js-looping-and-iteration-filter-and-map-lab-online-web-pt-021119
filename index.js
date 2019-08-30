function driversWithRevenueOver(drivers, revenue){
	return drivers.filter(function (driver){return driver.revenue > revenue})
}


function driverNamesWithRevenueOver(drivers, revenue){
	return driversWithRevenueOver(drivers,revenue).map(function (driver){return driver.name})
}

function exactMatch(drivers, attrib){
	return drivers.filter(function (driver){
		return driver[Object.keys(attrib)[0]] === Object.values(attrib)[0]})
}

function exactMatchToList(drivers, attrib){
	return exactMatch(drivers, attrib).map(function(driver){return driver.name});
}
