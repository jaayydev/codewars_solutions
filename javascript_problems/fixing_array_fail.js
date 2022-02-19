// 7 KYU
function removeNthElement(arr, n) {
  var arrCopy = arr;

  const arrFilter = arrCopy.filter((elem, i) => i !== n);

  return arrFilter
}