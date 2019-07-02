# Learn about Array prototypes 
- Basically prototypes can be created for any javascript Object and Array.
- Where would you use it?
- Ideally lot of developers avoid doing it, and work with existing functions and properties which are more than enough.
- But lets see with an example. 

## Explanation and example
So if you created an object like - paste the code below in your <script> </script> and open console to see it.

```
function myPersonObject(name, age, gender) {
  this.name = name,
  this.age = age,
  this.gender = gender
}

let suhasee = new myPersonObject("Suhasee", 18, "female");
let nikita = new myPersonObject("Nikita", 18, "female");
let laveena = new myPersonObject("Laveena", 18, "female");
let sonakshi = new myPersonObject("Sonakshi", 18, "female");
let piyush = new myPersonObject("Piyush", 18, "male");
let prashant = new myPersonObject("Prashant", 18, "male");

console.log(suhasee);
```
Now we know we have name age and gender, but lets say I forgot ORR the original Object was created by someone else
but i need this one new function to get whoami from the Object, which would combine all the paramters and return a 
nice string; 

Try
```
console.log(sonakshi.whoami());
```
You should get an error, since no function exists in our object.

How do i add it to the object?

### Using the prototype CONSTRUCTOR. 
- [https://www.w3schools.com/jsref/jsref_prototype_array.asp](https://www.w3schools.com/jsref/jsref_prototype_array.asp)
So lets write a prototype called whoami.

```
myPersonObject.prototype.whoami = function(){
 this.whoami = "I am "+ this.name + ", and I am a "+ this.age + " year old " + this.gender; 
}

console.log(laveena); // expand the arrow and open ___proto__: Object
console.log(laveena.whoami()); //
```

Expand the console output and you will see something called ___proto__: Object expand that and you will see the
function who am i there. 

Now since we created the prototype constructor on the original myPersonObject 
(this is means that even already created Objects will also get this as well.)

So if we now call the new function for the myPersonObject we created ....

```
console.log(nikita.whoami());
console.log(laveena.whoami());
console.log(sonakshi.whoami());
console.log(piyush.whoami());
console.log(prashant.whoami());
```

So even though we created all the above objects (suhasee, nikita and so on...) much before we added the prototype. 
You can see that now all objects get the function added to their properties. Thats the power of the prototype. :-)

# Prototype Task
Above we extended our own custom Object 'myPersonObject'. Similarly we can extend any built in javascript objects 
and Arrays. 

## Task - create a prototype for Javascript's Array 

- Called _htmlTable 
- ie. Array.prototpe._htmlTable
- It should take an argument of the div to which it needs to append the output.
- It should generate an HTML table, like the one you generated for the MAP table. (Nikita' please push)
- So you can basically use everything from your yesterday's task 

note: you dont need to use __htmlTable but you can use htmlTable also, but its just a good convention to use, so that you
yourself dont get confused.

### Using getDetails._htmlTable("dvtable") - it should create the table inside the div we are passing to.

It might be a very easy task since you have everything else in place and just need to attach it the prototype function,
_table.... All the best. 


