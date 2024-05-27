export default function getListStudentsIds(getListStudents) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }
  const ids = getListStudents.map((item) => item.id);
  return ids;
}
