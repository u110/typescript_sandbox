function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane", lastName: "User" };
// let user = [0, 1, 2]; // --> error
var res = greeter(user);
console.log(res);
document.body.innerHTML = res;
