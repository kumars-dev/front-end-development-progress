
# Learning Typescript

All programmers or coders work with c and c++ to define some datatype to their variables whether this is string, boolean, arrays, and much more.
Have you ever thought of why typescript is used even javascript have flexibility to define? or loosely typed language (code point 🙄).

---
### Still Thinking..........😶

give permission to handle your thought.......😅

🤣🤣🤣

.
.
.
.
okay okay let's continue...

What if you define an empty variable (no values assigned) and with same variable name you are using for number-> you can get through example.

# Ts
```javascript
var a ; // define variable name
a = 'Love' // changes to string
```
If you notice we can manipulate the variable values without any restriction, but suppose while working on vast project somehow, you manipulate the variable values dynamically, you can't get where the error is.

```js
// some code........................

var a = 30; // which is a number write now

// some code........................
// somewhere e.g line number 80 🤔 you changed this as:

a='lover of';

// where you need number properties or method, you get an error of value undefined respect to variable named 'a'.

```
I hope this will give you some idea what is javascript doing. This called as ***Type conversion*** in js.

So, What is Typescript? you must be wondering.

Wait...............................

what if you know, using or changing variable datatype before running of your code in browser, probably Number --> String or vice-versa.

yeh, you got what I want to tell you.

yes..... 

you and me following right thought. This is what Typescript capable to do. 
this will tell you the error before compiling and after compiling using 'tsc' command you will able to compile the code, this code creates a seperate javascrit file which linked to index.html file.

`<script type='module' src='{path of file}'></script>`

whenever you write typescript code after compilation, code is written in your linked javascript file. 

have you observe how typescript file communicate with 'index.js' file?

The answer to this is while compilation of typescript file typescript generates a index.js file and then what ever you code on typescript file it will update in javascript file as well.

# Basic datatype | Tuple| Interface | Type aliasis
 
* primitive types [number, boolean, string]
* arrays,
* Tuples,
* Enums,
* Any| Unknown| Void| Null| Undefined| Never.

### Tuple
`// tuple -> order matter just like man matters 😁
let trr:[string, number] = ['mk',10]
// but wait what if someone inject other values
trr.push(56);
console.log(trr,'tuple'); // ['mk',10,56]
// means any buddy can push the code in it (no safety for indexes greater than 2, after 10 , any value can be inserted into array).
// do we need to stop from being manipulated like my friend did to me.`

`let trr1:readonly [string,number] = ['mk',11];
// now try to push 
// trr1.push(45); this won't work like mine X`

`const tgraph :[x:number,y:number] = [34.534,23.22];
console.log(tgraph);
// destructure the same
const [x,y ] = tgraph
console.log("x"+ " "+ x,"y"+" "+ y);`

### Interface

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

### CLASSES & OBJECTS
#### classes - 
classes are the instance of objects.
example->

``` 
class Car{
   name:string,
   model:string
} 

const car1 = new Car("bugati","2025")

```

#### Access Modifiers
there are three modifier, namely

* Public
* Protected
* Private

##### note:- these are mentioned and coded in index.ts file. Protected modifier will be done when we work on inheritance.

# Conclusion

The repository is based on learning process of typescript. what ever i learn will put here some meaningful and scrap 😁

--- 
- keep practicing, Keep chilling 😎

