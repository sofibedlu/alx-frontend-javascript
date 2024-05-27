export default function getStudentsByLocation(getListStudents, city) {
  const students = getListStudents.filter((item) => item.location === city);
  return students;
}
