// ES6 Code Challenge
class TownElement {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends TownElement {
    constructor(name, buildYear, numberTrees, parkArea) {
        super(name, buildYear);
        this.numberTrees = numberTrees;
        this.parkArea = parkArea; //km2
    }
    calculateDensity () {
        return this.numberTrees / this.parkArea;
    }
    calculateAge () {
        return new Date().getFullYear() - this.buildYear;
    }
}

class Street extends TownElement {
    constructor(name, buildYear, length=3) {
        super(name, buildYear);
        this.length = length;
    }
    classifyStreet() {
        let streetSize = new Map();
        streetSize.set(1,'tiny');
        streetSize.set(2,'small');
        streetSize.set(3,'normal');
        streetSize.set(4,'big');
        streetSize.set(5,'huge');
        return streetSize.get(this.length);
    }
}

// Parks
const greenPark = new Park('Green Park', 1987, 215, 0.2);
const nationalPark = new Park('National Park', 1894, 3541, 2.9);
const oakPark = new Park('Oak Park', 1953, 949, 0.4);

// Streets
const oceanAvenue = new Street('Ocean Avenue', 1999, 4);
const evergreenStreet = new Street('Evergreen Street', 2008, 2);
const fourthStreet = new Street('4th Street', 2015);
const sunsetBoulevard = new Street('Sunset Boulevard',1982,5);

// Array used to calculate the average age of parks
const arrAges = [greenPark.calculateAge(), nationalPark.calculateAge(), oakPark.calculateAge()];

// Array used to calculate the total length and average length of streets
const streetArray = [oceanAvenue.length, evergreenStreet.length, fourthStreet.length, sunsetBoulevard.length];

// Generic Function to sum elements
const sumElements = (args) => args.reduce( (a,b) => a + b, 0)

// Generic Function to calculate Average
const getAverage = (args) => args.reduce( (a,b) => a + b, 0 ) / args.length;

// Return the names of the parks that have more than 1000 trees
const thousandTrees = (arr) => {
    let returnedParks = [];
    for (let i=0; i<arr.length; i++) {
        if (arr[i].numberTrees >= 1000) {
            returnedParks.push(arr[i].name);
        }
    }
    return returnedParks.join(' and ');
}


console.log('-----PARKS REPORT-----');
console.log(`Our 3 parks have an average of ${getAverage(arrAges)} years.`)
console.log(`${greenPark.name} has a tree density of ${greenPark.calculateDensity()} trees per square km`);
console.log(`${nationalPark.name} has a tree density of ${nationalPark.calculateDensity()} trees per square km`);
console.log(`${oakPark.name} has a tree density of ${oakPark.calculateDensity()} trees per square km`);
// TODO thousand tress
console.log(`${thousandTrees([greenPark, nationalPark, oakPark])} have/has more than 1000 trees`);

console.log('-----STREETS REPORT-----');
console.log(`Our 4 streets have a total length of ${sumElements(streetArray)} km, with and average of ${getAverage(streetArray)} km.`)
console.log(`${oceanAvenue.name}, built in ${oceanAvenue.buildYear}, is a ${oceanAvenue.classifyStreet()} street`);
console.log(`${evergreenStreet.name}, built in ${evergreenStreet.buildYear}, is a ${evergreenStreet.classifyStreet()} street`);
console.log(`${fourthStreet.name}, built in ${fourthStreet.buildYear}, is a ${fourthStreet.classifyStreet()} street`);
console.log(`${sunsetBoulevard.name}, built in ${sunsetBoulevard.buildYear}, is a ${sunsetBoulevard.classifyStreet()} street`);
