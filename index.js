// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){
    
    return drivers.slice(0,2);
}
function returnLastTwoDrivers(drivers) {
    
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]


const createFareMultiplier= num1 => {return (num2)  => num1*num2 }

const fareDoubler= createFareMultiplier(2);
 const fareTripler= createFareMultiplier(3);

// function fareTripler(){
//     const triples = createFareMultiplier()
//     console.log(triples * 3);
// }

const selectDifferentDrivers = (drivers, driversToReturn) => driversToReturn(drivers);

    // (wrong code)drivers = ["Will", "Mac", "Pete", "Jada"] && Array.of(returnFirstTwoDrivers || returnLastTwoDrivers)
