const student={
  name:"suresh",
  age:100,
  marks:100,
  studentMarks:function(){
    setTimeout(()=>{

      console.log(this.name);

    },3000);
    console.log(this.age);
  } 
}

//console.log(student.name);

student.studentMarks();