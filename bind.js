
//var student1={

    //Name:"scott",

   // Marks:70,
//}
var student1={

    Name:"scott",

    Marks:70,
}
var student2={

    Name:"scotty",

    Marks:70,
}
let caluculatemaraks=function(sub1,sub2,sub3){

let totalmarks=sub1+sub2+sub3;

let message=`HI ${this.Name} your total marks is : ${totalmarks}`;
console.log(message);
}

//caluculatemaraks.call(student,10,20,30)
//caluculatemaraks.apply(student,[10,20,30]);

//caluculatemaraks.apply(student1,[10,20,30]);
//caluculatemaraks.apply(student2,[10,210,30]);


var clcmarks1=caluculatemaraks.bind(student1);

var clcmarks2=caluculatemaraks.bind(student2);


clcmarks1(60,20,30);

clcmarks2(60,220,30);
