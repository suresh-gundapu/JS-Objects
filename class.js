class Student {
  name;
  age;
  city;
  getDetails = function () {
    return this.name;
  };
}
const StudentData = new Student();
StudentData.name = "suresh";
StudentData.age = 20;
StudentData.city = "Hyderabad";
console.log(StudentData);
console.log(StudentData.getDetails());
const StudentData2 = new Student();
StudentData2.name = "raju";
StudentData2.age = 20;
StudentData2.city = "Khammam";
console.log(StudentData2);
console.log(StudentData2.getDetails());