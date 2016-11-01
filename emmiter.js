/*
var time =0;
var timer = setInterval(function(){
  time +=2;
  console.log(time + 'hey ninajs');
  if (time > 5){
    clearInterval(timer);
  }
},2000);
*/

function sayHi(){
  console.log("hi");
}

sayHi();

var sayBye = function(){
  console.log("bye");
}

sayBye();

function callFunction(fun){
  fun();
}

callFunction(sayBye);

/* Llamar funciones de otro js */
var stuff = require('./stuff');
console.log(stuff.counter (['shaun', 'crystal', 'ryu']));
console.log(stuff.adder(2,3));
console.log(stuff.adder(stuff.pi,5));

/* Lllamar module events  con Emmit */
var events = require ('events');

var myEmitter = new events.EventEmitter();
  myEmitter.on('someEvent', function(mssg){
    console.log(mssg);
});

myEmitter.emit('someEvent', 'the event was emited');

/* Util Inherits libreria  - modules  */
var util = require('util');

var Person = function(name){
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var people = [james, mary, ryu];

people.forEach(function(person){
  person.on('speak', function(mssg){
      console.log(person.name + 'said: ' + mssg );
  });
});

james.emit('speak', 'hey dudes');
ryu.emit('speak', 'I want curry');
