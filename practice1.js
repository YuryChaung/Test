//practice1.js
'use strict' 

let number =5;
let numvwes = [5,6,7,8];
let origin = {x:0,y:0};  //structure

console.log('origin:',origin);
console.log('origin.x:',origin.x,'origin.y:',origin.y);
origin.z = 1;
console.log('secod origin:',origin);
// z => property,key;

const numbers = [5,6,7,8];
numbers[0] = 8;
numbers[5] = 9;
console.log(numbers);

var myObj = new Object(),
    str = "myString",
    rand=Math.random(),
    obj = new Object(),
    rand2=Math.floor(Math.random()*100);

console.log(myObj);

myObj.type = "dot syntax";
myObj["data created"] = "string with space";
myObj[str] = "string value";
myObj[rand] = "random number";
myObj[obj] = "object"
myObj[""]="empty string";

console.log(myObj);
console.log(rand);
console.log(rand2);

var myCar = new Object();
var propertyName = "make";
myCar[propertyName]="ford";
console.log(myCar);
propertyName = "model";
myCar[propertyName] = "mystang";
console.log(myCar);
/*
function showProps(obj,objName){
    var result="";
    for(var i in obj){
        if(obj.hasOwnProperty(i)){
            result += objName + "." + i + "=" + obj[i] + "/n";
            }
        }
          return result;
      }
      */

//function
let target = number;
let isOdd = function(target){
    if(target%2===0){
       console.log('false');
    }else{
       console.log('ture');
    }
 }

console.log(isOdd(7));
console.log(isOdd(12));

//Closure 
//就是把function 所在的block 的變數把包的機制
let returnNumber1 = undefined;
{//BLOCK
    let number1=3;
    //number1的scope在‘Block’裡面
    console.log('number1:',number1);
    returnNumber1 = function(){return number1;};
}
console.log('outside of block returnNumber1:',returnNumber1());


let anyFunction = function(anyNumber){
    let anyNumber2 = anyNumber + 2;
    return anyNumber2;
}

console.log('why let the code too long:',anyFunction(7));




let fetchUrl = function(url,callbackfunction){
    let result = 'haha';
    callbackfunction(result);
    return result;
    }

let logFetchUrlResult = function(resultFormUrl){
    console.log('resultFrome:',resultFormUrl);
    }

let x = fetchUrl('www.google,com',logFetchUrlResult);
console.log(x);
