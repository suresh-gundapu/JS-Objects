class Student {
  name;
  age;
  city;
  constructor(a, b, c) {
    this.name = a;
    this.age = b;
    this.city = c;
  }
}
class Teacher extends Student {
  constructor(a, b, c) {
    super(a);
    this.name = a;
    this.age = b;
    this.city = c;
  }
  show() {
    return this.name;
  }
}

let StudentData = new Teacher("suresh", 50, "hyderabad");
let TeacherData = new Student("raju", 60, "wgl");

console.log(StudentData);
console.log(StudentData.show());
console.log(TeacherData);
