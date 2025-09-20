// O(1)
function constant(arr) {
  return arr[0];
}

// O(log n)
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// O(n)
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

function linearSearchWithMethod(arr, target) {
  return arr.findIndex((element) => element === target);
}

// O(n log n) | log linear, linearithmic
function mergeSort(arr) {
  // base case
  if (arr.length <= 1) {
    return arr; // return the array
  }

  //   this is divide and conquer, O(log n)
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  //   this is linear O(n)
  return merge(left, right);

  //   therefore, their combination O(n log n)
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  // while the length of the left array is greater than i
  // and the length of the right array is greater than j
  while (i < left.length && j < right.length) {
    // if left is less than right, that's already sorted
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      // meaning that left is greater than right
      result.push(right[j]);
      j++;
    }
  }

  return [...result, ...left.slice(i), ...right.slice(j)];
}
