var employee={
fname:"suresh",
lname:"gundapu",
designation:"developer",
experience:4,
salary:20000,
getFullName:function(){
return `${this.fname} ${this.lname}`;
//return this.fname +" "+ this.lname;
},
promote:function(){
var isEligiblePromotion;
if(this.designation == "developer")
{
if(this.experience >=4){
 isEligiblePromotion=true;
  this.designation="SR Developer"
 this.salary=this.salary+(this.salary*10/100);
}
else{
    isEligiblePromotion=false;
}
return  isEligiblePromotion;
}    
}
};

console.log(employee);
console.log(employee.getFullName());

if(employee.promote()==true){

console.log("congrats you are eligible");
console.log("update designation"+ employee.designation);
console.log("update salary"+ employee.salary);

}
else{
    console.log("you are not eligible");
}