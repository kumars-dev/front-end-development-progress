// // let a = 3;
// // var b : string = '3423';
// // var abc : boolean = true
// // var bb;
// // var arr :number[] =[1,2,3]
//  let a = [1,2,3,4]
//  let b = a;
//  a.pop()
//  console.log(b,"b")
// BASIC TYPES
// Primitive types (number, string, boolean)
var a = 34343;
// array
let arr = [1, 2, 3, 4, "montu", { name: 'harsh' }, { name: true }];
console.log(arr);
// if want only number array
/*
Basic types
primitive types [number, boolean, string]
arrays,
Tuples,
Enums,
Any, Unknown, Void, Null, Undefined, Never.
*/
let brr = [1, 2, 3, 4]; // only accept number
// tuple -> order matter just like man matters 😁
let trr = ['mk', 10];
// but wait what if someone inject other values
trr.push(56);
console.log(trr, 'tuple'); // ['mk',10,56]
// means any buddy can push the code in it (no safety for indexes greater than 2, after 10 , any value can be inserted into array).
// do we need to stop from being manipulated like my friend did to me.
let trr1 = ['mk', 11];
// now try to push 
// trr1.push(45); this won't work like mine X
const tgraph = [34.534, 23.22];
console.log(tgraph);
// destructure the same
const [x, y] = tgraph;
console.log("x" + " " + x, "y" + " " + y);
// ENUM represents group of constants.
//  * unchangeable variables
// if ist index in object have number 1 after this other key pair assigned 1 value increment itself.
var directions;
(function (directions) {
    directions[directions["north"] = 1] = "north";
    directions[directions["east"] = 2] = "east";
    directions[directions["south"] = 3] = "south";
    directions[directions["west"] = 4] = "west";
})(directions || (directions = {}));
console.log(directions.west, 'west');
// fully initialized enum
var status_code;
(function (status_code) {
    status_code[status_code["NOT_FOUND"] = 404] = "NOT_FOUND";
    status_code[status_code["SUCCESS"] = 200] = "SUCCESS";
    status_code[status_code["ACCEPTED"] = 202] = "ACCEPTED";
    status_code[status_code["BAD_REQ"] = 400] = "BAD_REQ";
})(status_code || (status_code = {}));
console.log(status_code.ACCEPTED);
//  the above is known as NUMERIC ENUM
// similary there is string enum too. enum has only these two types.
var USER_ROLE;
(function (USER_ROLE) {
    USER_ROLE["super_admin"] = "superadmin";
    USER_ROLE["admin"] = "admin";
    USER_ROLE["user"] = "user";
})(USER_ROLE || (USER_ROLE = {}));
let ab;
function def(ab, cd) {
    console.log(ab, cd + 'abcd');
}
def(34, 'mk');
ab = false;
if (!ab) {
    console.log('outside function variable');
}
function userdetails(obj) {
    console.log(obj);
}
userdetails({ name: "montu", email: "montukumar@gmail.com", phone: 853432, password: "asdfasdf", admin: true });
userdetails({ name: "kumar", email: "sohankumar@gmail.com", phone: 929387498, password: "askdjflkjoajsdfj", admin: false });
let abcd = 65;
let bstack = null;
console.log(typeof (bstack));
export {};
//# sourceMappingURL=index.js.map