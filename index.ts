class Student {
    name: string;
    studentID: string;
    courses: string[] = [];
    facilities: string[] = [];
    balance: number = 0;
  
    constructor(name: string) {
      this.name = name;
      this.studentID = this.generateStudentID();
    }
  
    private generateStudentID(): string {
      // Generate a unique 5-digit student ID
      return Math.floor(10000 + Math.random() * 90000).toString();
    }
  
    enrollCourse(courseName: string, tuitionFee: number) {
      this.courses.push(courseName);
      this.balance += tuitionFee;
    }
  
    addFacility(facilityName: string, facilityFee: number) {
      this.facilities.push(facilityName);
      this.balance += facilityFee;
    }
  
    payTuition(amount: number) {
      if (amount <= this.balance) {
        this.balance -= amount;
      } else {
        console.log(`Insufficient balance. Current balance: $${this.balance}`);
      }
    }
  
    showStatus() {
      console.log(`Student ID: ${this.studentID}`);
      console.log(`Name: ${this.name}`);
      console.log(`Enrolled Courses: ${this.courses.join(', ')}`);
      console.log(`Facilities: ${this.facilities.join(', ')}`);
      console.log(`Balance: $${this.balance}`);
    }
  }
  
  class StudentManagementSystem {
    students: Student[] = [];
  
    registerStudent(name: string) {
      const student = new Student(name);
      this.students.push(student);
    }
  
    enrollStudent(studentName: string, courseName: string, tuitionFee: number) {
      const student = this.students.find((s) => s.name === studentName);
      if (student) {
        student.enrollCourse(courseName, tuitionFee);
      } else {
        console.log(`Student not found: ${studentName}`);
      }
    }
  
    addFacilityToStudent(studentName: string, facilityName: string, facilityFee: number) {
      const student = this.students.find((s) => s.name === studentName);
      if (student) {
        student.addFacility(facilityName, facilityFee);
      } else {
        console.log(`Student not found: ${studentName}`);
      }
    }
  
    showStudentStatus(studentName: string) {
      const student = this.students.find((s) => s.name === studentName);
      if (student) {
        student.showStatus();
      } else {
        console.log(`Student not found: ${studentName}`);
      }
    }
  }
  
  // Example usage:
  const studentSystem = new StudentManagementSystem();
  
  studentSystem.registerStudent("John Doe");
  studentSystem.enrollStudent("John Doe", "Math 101", 500);
  studentSystem.addFacilityToStudent("John Doe", "Library", 50);
  studentSystem.showStudentStatus("John Doe");