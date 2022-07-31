// In this exercise, implement functions to add, delete, and lookup an item in
// an array as well as print all of the items within that array.
// ❏ Test your implementation with the test cases outlined in the .js file. ❏ Consider other test cases to check the robustness of your solution.


let result = [];

const insertItem = (item) => {
  result.push(item)
  return item;
};

const deleteItem = (item) => {
  let length = result.length;
  // no list
  if (result.length === 0){
    return item;
  }
  // item is at the beginning and is the only item
  if(result.length === 1 && result[0] === item){
    result = [];
    return item;
  }
  let index = result.indexOf(item);
  // item not found
  if(index < 0){
    return item;
  }
  // item is at the end
  if(index == length - 1){
    result = result.slice(0, length-1);
    return item;
  }
  //item is in the middle
  result = [].concat(result.slice(0,index), result.slice(index+1, length)) // + result.slice(index+1, length-1)
  return item;
};

const lookupItem = (index) => {
  // beginning
  let length = result.length
  let item = 0
  if(length === 0 || index > length || index < 0){
    return null;
  }
  // first
  if(length === 1 && index === 0){
    item = result[0];
    result = [];
    return item;
  }
  // end
  if(length-1 === index){
    item = result[index];
    result = result.slice(0,length-1);
    return item;
  }
  // middle
  item = result[index]
  result = [].concat(result.slice(0,index), result.slice(index+1, length))
  return item;
};


const printItems = () => {
  console.log("'" + result.join(', ') + "'")
  return result;
};

insertItem(1);
insertItem(2);
insertItem(3);
insertItem(2);
insertItem(1);
console.log(printItems());
// expected: '1, 2, 3, 2, 1'
console.log(lookupItem(1));
// expected: 2
console.log(printItems());
// expected: '1, 3, 2, 1'
deleteItem(1);
console.log(printItems());
// expected: '3, 2, 1'
console.log(lookupItem(2));
// // expected: 1
console.log(printItems());
// // expected: '3, 2'
deleteItem(-1);
console.log(lookupItem(-1));
// // expected: null