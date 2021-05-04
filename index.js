const returnFirstTwoDrivers = function(drivers) {
    const a = drivers[0];
    const b = drivers[1];
    return[a,b];
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.splice(-2)
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
