export default function getStudentIdsSum(getListStudents) {
  const result = getListStudents.reduce((accumulator, current) => accumulator + current.id, 0);
  return result;
}
