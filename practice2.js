//Object
'use strict'

let Animal = function(weight,speed){
    this.weight = weight;
    this.speed = speed||10;
};

//Animal.prototype.position = { x:0 , y:0 };

let cat = new Animal(5,40);
let dog = new Animal(20,45);
let pig = new Animal(200);

console.log(Animal);
console.log(cat);
console.log(dog);
console.log(pig);
