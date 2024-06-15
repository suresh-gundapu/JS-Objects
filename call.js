var person={

    age:20,
}

//let birthday=function(){
//this.age++

//}

let birthday= function(years){

    this.age+=years
}

console.log(person.age);
birthday.call(person,3);
console.log(person.age);
