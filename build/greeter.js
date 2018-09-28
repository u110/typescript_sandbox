function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
// let user = [0, 1, 2]; // --> error
var res = greeter(user);
document.body.innerHTML = res;
console.log(res);
