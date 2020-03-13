const sentence = ['sense.','make', 'all', 'will', 'This'];


// Way 1 - Use for loop
const reverseArray = arr => {
  let newArray =[]
  for (let i = arr.length-1 ; 0 <= i ; i--){
      newArray.push(arr[i]);
    }
  return newArray;
  }

console.log(reverseArray(sentence)); 


// way 2 using bilt-in objects -- reverse()
const reverseByObj = sentence.reverse();
console.log(reverseByObj);
    
