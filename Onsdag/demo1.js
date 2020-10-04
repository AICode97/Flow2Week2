console.log("Hi Class")

let car = {make: "volvo", year: 2011}
//console.log(car) //1

//let carCopy = car;
let carCopy = {...car};
//console.log(carCopy) //2

carCopy.year = 2018;

console.log(car) //3
console.log(carCopy) //4



var numbers = [1,3,5,10,11];

function makeListItem(number) {
    return `<li>${number}</li>`

    
}



    let listItems = numbers.map(makeListItem).join("");

    function myMap(callback, array ){
        let arrayCopy = [];
        array.forEach(element => {
            const newItem = callback(element)
            arrayCopy.push(newItem)
        });
        return arrayCopy;

    }
    let listItems2 = myMap(makeListItem,numbers).join("");
    console.log(listItems2)

