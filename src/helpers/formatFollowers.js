export function formatFollowers(number) {
  const str = (number / 1000).toString();
  if (str < 1) {
    return number.toString();
  }
  const strArr = str.split('.');
  const lastEl = strArr[1].padEnd(3, '0');

  strArr.splice(1, 1, lastEl);

  return strArr.join(',');
}
