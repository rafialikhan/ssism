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
Now we know we have name age and gender, but lets say we forgot OR the original Object was created by someone else
but we need this one new function to get whoami from our myPersonObject, which would combine all the paramters and return a 
nice string; 

Try
```
console.log(sonakshi.whoami());
```
You should get an error ...whoami is not a function at <anonymous>, since no function exists in our object.

Let us add it to the myPersonObject now.

### Using the prototype CONSTRUCTOR. 
- [https://www.w3schools.com/jsref/jsref_prototype_array.asp](https://www.w3schools.com/jsref/jsref_prototype_array.asp)
So lets write a prototype called whoami.

```
myPersonObject.prototype.whoami = function(){
 return "I am "+ this.name + ", and I am a "+ this.age + " year old " + this.gender; 
}
```
Expand the console output and you will see something called ___proto__: Object expand that and you will see the
function who am i there. 

Now since we created the prototype constructor on the original myPersonObject 
(this is means that even already created Objects will also get this as well.)

So if we now call the new function for all the myPersonObject we created ....

```
console.log(nikita.whoami());
console.log(laveena.whoami());
console.log(sonakshi.whoami());
console.log(piyush.whoami());
console.log(prashant.whoami());
console.log(suhasee.whoami());
```

So even though we created all the above objects (suhasee, nikita and so on...) much before we added the prototype. 
You can see that now all objects get the function added to its properties. Thats the power of the prototype. :-)

# Lets Talk

You guys kept saying whoami but i could not hear you. So let's talk. 

Turn on the speakers on your phone or wear head phone..now add the following code.

```
let speak = sonakshi.whoami(); // getting the text
let msg = new SpeechSynthesisUtterance(speak); // creating a new speechSynthesisUtterance
window.speechSynthesis.speak(msg); // Calling window speechSynthesis to speak

```

Let's have some more fun with voices

```
var voices = window.speechSynthesis.getVoices();
msg.voice = voices[10]; // try changing the number and hear different voices.
msg.voiceURI = 'native';
msg.volume = 1; // 0 to 1
msg.rate = 1; // 0.1 to 10
msg.pitch = 2; //0 to 2

msg.text = prashant.whoami();
window.speechSynthesis.speak(msg)
```

_________________

# TASK 1 - VOICE

Use the code from above.

Loop through the above voices array to find male and female voices. (remember it)

Now write a new function - makeMeTalk(obj){ 
- take our object as an argument
- identify the gender, 
- fire the whoami function to get the speakText. 
- assign the correct voice for the correct gender using the msg.voice =

- call window.speechSynthesis.speak(speakText)
}
_________________

# TASK 2 - Prototype

Above we extended our own custom Object 'myPersonObject'. Similarly we can extend any built in javascript objects 
and Arrays. 

## Task - create a prototype for Javascript's Array 

- Called _htmlTable 
- ie. Array.prototype._htmlTable
- It should take an argument of the div to which it needs to append the output.
- It should generate an HTML table, like the one you generated for the MAP table. (Nikita' please push)
- So you can basically use everything from your yesterday's task 

note: you dont need to use __htmlTable but you can use htmlTable also, but its just a good convention to use, so that you
yourself dont get confused.

### Using getDetails._htmlTable("dvtable") - it should create the table inside the div we are passing to.

It might be a very easy task since you have everything else in place and just need to attach it the prototype function,
_table.... All the best. 


