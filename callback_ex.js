let callback1 =function(name,age){

console.log(`the name is ${name} and age is ${age}`);
}

let callback2=function(name,age){

    console.log(`the age is ${age} and name is ${name}`);

}
let dowork = function(name,age,refvar){
name = "Mr"+name;
age++;
refvar(name,age);
}

dowork("scott",21,callback2);