class Student {
  name;
  age;
  city;
  constructor(a, b, c) {
    this.name = a;
    this.age = b;
    this.city = c;
  }
   #getDetails=function() {
    return this.name;
  };
  getAge(){
    return this.#getDetails();
  }
}
const StudentData = new Student("suresh", "30", "HYD");
const StudentData2 = new Student("raju", "40", "WGL");

console.log(StudentData);
//console.log(StudentData.#getDetails());

console.log(StudentData2);
//console.log(StudentData2.#getDetails());
console.log(StudentData.getAge());
