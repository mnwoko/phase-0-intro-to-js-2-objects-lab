// Write your solution in this file!
const employee =  {
    name: "Lisa",
    streetAddress: "6627 Marion"
}

// function updateEmployeeWithKeyAndValue(employee,key, value){
//     console.log("employee: ", employee)
//     console.log("key: ", key)
//     console.log("value: ", value)
//     console.log("employee at key", employee[key])
//     employee[key] = value
//     console.log("employee after change: ", employee)
//     return employee
// console.log("return value", updateEmployeeWithKeyAndValue(employee,"name", "value"))
// }


 function updateEmployeeWithKeyAndValue(employee,key, value){
    const newObj = {...employee};
    newObj[key] = value
    return newObj
}
//

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key, value){
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    delete{...employee}.key
    
}
