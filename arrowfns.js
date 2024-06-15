

//var student={

//name:"suresh",

//getMarks:()=>{

  //  console.log(this);
//}


//}

//console.log(student.name);

//console.log(student.getMarks());


//let test=function(a,b){

  //  return a+b;
//}

let test=(a,b)=>(a+b);

console.log(test(20,30));

const student={
  name:"suresh",
  age:"suresh",
  marks:100,
  studentMarks:function(){
    console.log(this.name);
    setTimeout(()=>{

      console.log(this.name);

    },3000)
  } 
}

//console.log(student.name);

student.studentMarks();