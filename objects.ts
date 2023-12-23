const person: {firstName : string ; lastName : string ; age : number} = {
    firstName : "John",
    lastName : "Doe",
    age : 30,
}
console.table(person)

function printUser() : {firstName : string ; lastName : string ; age : number} {
    return {
        firstName : "John",
        lastName : "Doe",
        age : 30,
    }
}
const peasa = printUser()
console.log(peasa)