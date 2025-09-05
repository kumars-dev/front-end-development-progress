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
var a:number = 34343;

// array
let arr : (string | number |{name:string}|{name:boolean})[] = [1,2,3,4,"montu",{name:'harsh'},{name:true}]
console.log(arr)

// if want only number array
/*
Basic types 
primitive types [number, boolean, string]
arrays,
Tuples,
Enums,
Any, Unknown, Void, Null, Undefined, Never.
*/

let brr:number[]=[1,2,3,4] // only accept number

// tuple -> order matter just like man matters 😁
let trr:[string, number] = ['mk',10]
// but wait what if someone inject other values
trr.push(56);
console.log(trr,'tuple'); // ['mk',10,56]
// means any buddy can push the code in it (no safety for indexes greater than 2, after 10 , any value can be inserted into array).
// do we need to stop from being manipulated like my friend did to me.

let trr1:readonly [string,number] = ['mk',11];
// now try to push 
// trr1.push(45); this won't work like mine X

const tgraph :[x:number,y:number] = [34.534,23.22];
console.log(tgraph);
// destructure the same
const [x,y ] = tgraph
console.log("x"+ " "+ x,"y"+" "+ y);

// ENUM represents group of constants.
//  * unchangeable variables
// if ist index in object have number 1 after this other key pair assigned 1 value increment itself.
enum directions {
   north = 1,
   east,
   south,
   west
}
console.log(directions.west,'west')

// fully initialized enum
enum status_code{
   NOT_FOUND = 404,
   SUCCESS = 200,
   ACCEPTED =202,
   BAD_REQ = 400
}
console.log(status_code.ACCEPTED)
//  the above is known as NUMERIC ENUM
// similary there is string enum too. enum has only these two types.

enum USER_ROLE{
   super_admin = "superadmin",
   admin = "admin",
   user = "user",
}

let ab:boolean;
function def(ab:number,cd:string){
   console.log(ab,cd +'abcd')
}
def(34,'mk');
ab = false;
if(!ab){
   console.log('outside function variable')
}
// ************************Interface ***********
// interface define the what type of data describe or used in the functions(for now)

interface UserDetailTypes{
   name:string,
   email:string,
   phone:number,
   password:string,
   gender?:string // ? is represent as optional in typescript.
}

// what if we need to use above interface into new interface? solution is using extend keyword

interface admin extends UserDetailTypes{
   admin:boolean;
}
function userdetails(obj:admin){
   console.log(obj)
}
userdetails({name:"montu", email:"montukumar@gmail.com",phone:853432,password:"asdfasdf",admin:true});
userdetails({name:"kumar", email:"sohankumar@gmail.com",phone:929387498,password:"askdjflkjoajsdfj",admin:false});
// we you make two interfaces with same name it got merged.
// till now its fine working but curosity in my head is what if we need to alias some name which might not easy to write again & again

// ********* type (aliases)
type ander = number;
let abcd :ander = 65;

// or

type snn = string|null|number

let bstack:snn=null;
console.log(typeof(bstack))
