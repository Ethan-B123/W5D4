const Student = function Student(name){
  this.name = name;
  this.courses = [];
};

Student.prototype.enroll = function (course) {
  course.addStudent(this);
  if (!self.hasConflict(course)) {
    this.courses.push(course);
  }
};

Student.prototype.courseLoad = function () {
  let hash = {};
  this.courses.forEach((course)=>{
    if (hash[course.department]) {
      hash[course.department] += course.credits;
    } else {
      hash[course.department] = course.credits;
    }
  });
  return hash;
};

Student.prototype.hasConflict = function (otherCourse) {
  for (var i = 0; i < this.courses.length; i++) {
    if (this.courses[i].hasConflict(otherCourse)){
      return true;
    }
  }
  return false;
};



const Course = function Course(name, department, credits, days, timeBlock) {
  this.days = days;
  this.timeBlock = timeBlock;
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = [];
};

Course.prototype.addStudent = function (student) {
  this.students.push(student);
};

Course.prototype.conflictsWith = function (otherCourse) {
  if (this.timeBlock !== otherCourse.timeBlock) {
    return false;
  }

  for (var i = 0; i < this.days.length; i++) {
    for (var j = 0; j < otherCourse.days.length; j++) {
      if (otherCourse.days[j] === this.days[i]) {
        return true;
      }
    }
  }

  return false;
};
