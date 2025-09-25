function binarySearchRecursive(target, arr, left = 0, right = arr.length - 1) {
  // base case is important for recursive!
  //   in case it was not found
  if (left > right) {
    return -1;
  }

  const midIndex = Math.floor((left + right) / 2);

  if (arr[midIndex] === target) {
    return midIndex; // or true
  }

  //   if current element is less than current mid, we need to get rid of left
  if (arr[midIndex] < target) {
    // we need to "increase" the numbers we're looking for
    return binarySearchRecursive(target, arr, midIndex + 1, right);
  } else {
    // we need to "decrease" the numbers we're looking for
    return binarySearchRecursive(target, arr, left, midIndex - 1);
  }
}
