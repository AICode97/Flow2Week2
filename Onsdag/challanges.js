var numbers = [1,3,5,10,11];

function makeListItem(number){
    return `<li>${number}</li>`

}

let listItems = numbers.map(makeListItem).join("/n")
//console.log(listItems)

listItems = numbers.map(function (number){
return `<li>${number}</li>`

}).join("/n")
//console.log(listItems)

listItems = numbers.map(number => `<li>${number}</li>`).join("/n")
//console.log(listItems)

listItems = numbers.map(number => {
    `<li>${number}</li>`
}).join("/n")
//console.log(listItems)

listItems = numbers.map(number =>(
`<li>${number}</li>`
)).join("/n")
console.log(listItems)





var members = [
    { name: "Peter", age: 14, gender : "male" },
    { name: "Jan", age: 35, gender : "male" },
    { name: "Janne", age: 25,  gender : "female" },
    { name: "Martin", age: 22, gender : "male" }]
  
  const tableRows = members.map(member => `
  <tr>
  <td>${member.name}</td>
  <td>${member.age}</td>
  <td>${member.gender}</td>
  </tr>
  
  `).join("\n")
  console.log(tableRows)

      
  