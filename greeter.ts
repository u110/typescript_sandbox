interface Person {
    firstName: string;
    lastName: string;
}


function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}


let user = { firstName: "Jane", lastName: "User"};
// let user = [0, 1, 2]; // --> error

let res = greeter(user);
console.log(res);
document.body.innerHTML = res
