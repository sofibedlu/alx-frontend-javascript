export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const cityStudents = getListStudents.filter((item) => item.location === city);
  const updateStudents = cityStudents.map((student) => {
    const gradeInfo = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: gradeInfo ? gradeInfo.grade : 'N/A',
    };
  });
  return updateStudents;
}
