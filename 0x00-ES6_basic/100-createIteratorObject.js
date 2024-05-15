export default function createIteratorObject(report) {
  return Object.entries(report.allEmployees).map(([, value]) => value).flat();
}
