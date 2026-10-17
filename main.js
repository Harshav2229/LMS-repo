// Learning Management System (LMS) - View Courses feature

const courses = [
  "Java Programming",
  "Python Programming",
  "Web Development"
];

console.log("Learning Management System");
console.log("Available Courses:");

courses.forEach((course, index) => {
  console.log(`${index + 1}. ${course}`);
});
