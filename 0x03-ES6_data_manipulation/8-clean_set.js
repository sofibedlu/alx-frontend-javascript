export default function cleanSet(set, startString) {
  const array = [];
  if (startString === '') {
    return '';
  }
  set.forEach((ele) => {
    if (ele.startsWith(startString)) {
      array.push(ele.slice(startString.length));
    }
  });

  return array.join('-');
}
