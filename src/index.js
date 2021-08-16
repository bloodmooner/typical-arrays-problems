
exports.min = function min (array) {
  if(array === undefined || array.length == 0) return 0;

    let minElem = array[0];

    for(let i =0; i < array.length; i++) {
        if(minElem < array[i]) {
            minElem = minElem;
        } else {
            minElem = array[i];
        }
    }
    return minElem;
}

exports.max = function max (array) {
  if(array === undefined || array.length == 0) return 0;

    let maxElem = array[0];

    for(let i =0; i < array.length; i++) {
        if(maxElem > array[i]) {
            maxElem = maxElem;
        } else {
            maxElem = array[i];
        }
    }
    return maxElem;
}

exports.avg = function avg (array) {
  if(array === undefined || array.length == 0) return 0;

    let sumElems = 0;

    for(let i =0; i < array.length; i++) {
        sumElems = sumElems + array[i];
    }
    return sumElems / array.length;
}
