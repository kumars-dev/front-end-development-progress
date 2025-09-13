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
var a: number = 34343;

// array
let arr: (string | number | { name: string } | { name: boolean })[] = [
  1,
  2,
  3,
  4,
  "montu",
  { name: "harsh" },
  { name: true },
];
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

let brr: number[] = [1, 2, 3, 4]; // only accept number

// tuple -> order matter just like man matters 😁
let trr: [string, number] = ["mk", 10];
// but wait what if someone inject other values
trr.push(56);
console.log(trr, "tuple"); // ['mk',10,56]
// means any buddy can push the code in it (no safety for indexes greater than 2, after 10 , any value can be inserted into array).
// do we need to stop from being manipulated like my friend did to me.

let trr1: readonly [string, number] = ["mk", 11];
// now try to push
// trr1.push(45); this won't work like mine X

const tgraph: [x: number, y: number] = [34.534, 23.22];
console.log(tgraph);
// destructure the same
const [x, y] = tgraph;
console.log("x" + " " + x, "y" + " " + y);

// ENUM represents group of constants.
//  * unchangeable variables
// if ist index in object have number 1 after this other key pair assigned 1 value increment itself.
enum directions {
  north = 1,
  east,
  south,
  west,
}
console.log(directions.west, "west");

// fully initialized enum
enum status_code {
  NOT_FOUND = 404,
  SUCCESS = 200,
  ACCEPTED = 202,
  BAD_REQ = 400,
}
console.log(status_code.ACCEPTED);
//  the above is known as NUMERIC ENUM
// similary there is string enum too. enum has only these two types.

enum USER_ROLE {
  super_admin = "superadmin",
  admin = "admin",
  user = "user",
}

let ab: boolean;
function def(ab: number, cd: string) {
  console.log(ab, cd + "abcd");
}
def(34, "mk");
ab = false;
if (!ab) {
  console.log("outside function variable");
}
// ************************Interface ***********
// interface define the what type of data describe or used in the functions(for now)

interface UserDetailTypes {
  name: string;
  email: string;
  phone: number;
  password: string;
  gender?: string; // ? is represent as optional in typescript.
}

// what if we need to use above interface into new interface? solution is using extend keyword

interface admin extends UserDetailTypes {
  admin: boolean;
}
function userdetails(obj: admin) {
  console.log(obj);
}
userdetails({
  name: "montu",
  email: "montukumar@gmail.com",
  phone: 853432,
  password: "asdfasdf",
  admin: true,
});
userdetails({
  name: "kumar",
  email: "sohankumar@gmail.com",
  phone: 929387498,
  password: "askdjflkjoajsdfj",
  admin: false,
});
// we you make two interfaces with same name it got merged.
// till now its fine working but curosity in my head is what if we need to alias some name which might not easy to write again & again

// ********* type (aliases)
type ander = number;
let abcd: ander = 65;

// or

// type snn = string|null|number  // '|' called as union (OR)

// let bstack:snn=null;
// console.log(typeof(bstack)) //return object

// Intersection (&)

type snn = {
  name: string;
  email: string;
};

type Admin = snn & {
  getdetails(users: string): void;
};

// key difference between type and interface
/* type used to shape datatype of variable or use an aliases for datatypes
example:- 
type snn = number | string
whereas,
interface is to shape an object whether it's a field is string , number, anyother datatype
interface user{
name:string,
email:string,
so on............
}
*/

/** ********** CLASSES & OBJECTS  */

class device {
  name = "lg";
  category = "digital";
}
let d1 = new device();
let d2 = new device();

/**constructor */
// a machine that build shape of final object

class car {
  constructor(public name: string, public price: number) {}
}
let car1 = new car("ferari", 200000);
console.log(car1);
let car2 = new car("mezrati", 5000000);
/**This keyword ->>>>>>
   when ever we need to access parameter inside the constructor then we need this keyword
   or whenever we want to use class variables or methods then we need to use a reference which this keyword provide.

   class shirt{
   public brand,
   public color,
   constructor(name:string, color:string){
   this.name = name  (only name represent constructor variable and this.name is class variable)
   }
   }

   short code of above 
   class shirt{
   constructor(public name:string, public color:string){}
   }
   let shirt1 = new shirt('zudio','orangered')
   this will output without use of this keyword in typescript.
*/

class Shirt {
  constructor(public brand: string, public color: string, size: number) {}
}

let small_shirt = new Shirt("scraper", "orangered", 34);
// console.warn(small_shirt,'smallsize tishirt')

// Access Modifiers --------- (private | protected | public)

class Atm {
  // there is public modifier used
  // constructor(public brand:string){}

  // private modifier gives error in TS and still compile.
  // constructor(private brand:string){}

  // protected modifier
  constructor(protected brand: string) {}
  changing() {
    this.brand = "mastsercard";
  }
}

let atm1 = new Atm("razorpay");
console.log(atm1);
// atm1.brand = 'halskdf';
// console.log(atm1)
// atm1.changing();
// console.log(atm1)

// under inheritance of classes the object and methods or variables are only accessible to the class which they belongs.

class Bottlemaker {
   public halua:string = "haluwa"
  constructor(private name: string) {}
}
class Metalmaker extends Bottlemaker {
  constructor(name: string) {
    super(name); // accessing parent class constructor
  }
  getvalue() {
    // console.log(this.name, this.halua); // getting error as parent has private parameter in constructor
  }
}
let m1 = new Metalmaker("aaaaaaa");
m1.getvalue();

/* if you still have confusion this.name = name then you can follow below approach that will clear all clutter. 
* one note here is class variable and methods if we want to access inside other methods then we need to use 'this' keyword. */
class bhk{
  public flat; //instead of name, use flat
  constructor(name:string){
    this.flat = name;
  }
}

let bhk1 = new bhk('lmno1')
console.log(bhk1);

class Samsung{
constructor(public name:string, public model:string, public imie?:number){}
}

const sam1 = new Samsung('samsungs23', '2024', 1232123);
console.log('sam1',sam1)
const sam2 = new Samsung('samsungs24', '2025');
console.log('sam2',sam2)


// getters && setters

class Fullgalian{
  constructor(
    public abc:string,
    public type:string[],
  ){}
  // getter method
  getName(){
    return this.abc +" authors: "+ this.type[0]
  }
  setName(value:string){
  return this.abc = value;
  }
}
let galian_1 = new Fullgalian('teri gali ki roshni',['kh....','bh...']) 
console.log(galian_1.getName())
let v1 = new Fullgalian('teri meri kahhani ', ['arjun', 'bh....'])
console.log(v1.setName('animal'));

// readonly property
class Abcd{
  constructor(public readonly myname:string){}
  setName(value:string){
    this.myname = value
  }
}
let a1 = new Abcd('asdfa');
console.log(a1.myname)

// what actually is getter setter is ? -------- Readme.md file pls visit


class bike{
  constructor(
    name:string,
    model:number,
    price:number,
    cc:number
  ){}
  // suppose you want to change bike cc later 

  getname(){} // this is the method, setName(){} is also a method.
  get name(){
   return this.name;
  }
}