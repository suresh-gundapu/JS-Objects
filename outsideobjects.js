var student={};


console.log(student);

student.marks=10;

console.log(student);

student.getResult=function(){

    if(this.marks>=35){        
    return "pass";}
    else{
    return "failed";
}
}

console.log(student);
console.log(student.marks);
console.log(student.getResult());