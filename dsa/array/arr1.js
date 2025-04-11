// static array
const arr_nums = [1, 4, 3, 5, 7, 2, 6, 8, 9, 0];

// dynamic array, push and pop
let color = [];
color.push("red"); // add to end
color.push("blue"); // add to end
color.pop(); // remove last element
// console.log(color);  ["red", "blue"]

// fixed size array initialization
const arr = new Array(10); // create array of size 10

// iterate through array
for (let i = 0; i < arr_nums.length; i++) {
  console.log(arr_nums[i]);
}

// filter, map, reduce
const array = [1, 2, 3, 4, 5, 6];
const filtered = array.filter((num) => num > 3); // [4, 5, 6]
const mapped = array.map((num) => num * 2); // [2, 4, 6, 8, 10, 12]
const reduced = array.reduce((acc, num) => acc + num, 0); // 21
// console.log(filtered); [4, 5, 6]
// console.log(mapped); [2, 4, 6, 8, 10, 12]
// console.log(reduced); 21

// 2d array
const arr_2d = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// iterate through 2d array
for (let i = 0; i < arr_2d.length; i++) {
  for (let j = 0; j < arr_2d[i].length; j++) {
    console.log(arr_2d[i][j]);
  }
}
