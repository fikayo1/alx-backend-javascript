export default function updateStudentGradeByCity(students, city, newGrades) {
  const newStu = students.filter((student) => (student.location === city));

  newStu.map((student) => {
    let grade = newGrades.filter((grade) => (student.id === grade.studentId));
    if (grade.length === 0) {
      grade = 'N/A';
    } else {
      grade = grade[0].grade;
    }
    return {
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade,
    };
  });
}
