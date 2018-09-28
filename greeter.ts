function greeter(person: string) {
    return "Hello, " + person
}

let user = "Jane User";
// let user = [0, 1, 2]; // --> error

let res = greeter(user);
document.body.innerHTML = res
console.log(res);
