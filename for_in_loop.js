const student = {
name:"suresh",
age:30,
address:"Hyderabad",
health:"good"
}
console.log(student.name);
console.log(student.age);

console.log(student["address"]);

for(var x in student){
    console.log(x+"-"+student[x]);
}