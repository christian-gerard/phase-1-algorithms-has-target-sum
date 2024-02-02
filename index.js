function hasTargetSum(array, target) {
  // Write your algorithm here
  // Produce Arrays that that do not include the number being summed and then decrement by one every rotation
  const sums = [];

  for (const num in array) {
    const slicedArr = array.slice(Number(num) + 1, array.length);
    const baseNum = array[Number(num)];

    const newSums = slicedArr.map((x) => x + baseNum);

    sums.push(newSums);
  }
  const finalSums = sums.join(",").split(',');
  const finalVal = finalSums.some((x) => x == target);
  return finalVal
  


}

const ex = [3,8,12,4,11,7]
const exTarg = 10;

hasTargetSum(ex,exTarg)
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
