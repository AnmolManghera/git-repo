type Person = {
    name:string;
    age:number;
}

function printPerson(person:Person) {
    console.log(`Name : ${person.name}, Age : ${person.age}`)
}

const myPerson : Person = {name: "Alice" , age : 25};
printPerson(myPerson)

type User = {
    namee: string;
    readonly age: number;
    location? : string
}

const printUserInfo = (user : User) : string => {
    return `Name: ${user.namee} , Age: ${user.age} , Location: ${user.location} `
}
const aUser : User = {namee :"harman kamina", age : 12 ,location: "china"}
console.log(printUserInfo(aUser))

//age is read only property
// aUser.age = 12

const result1 = printUserInfo({namee :"harman kamina", age : 1})
console.log(result1)
