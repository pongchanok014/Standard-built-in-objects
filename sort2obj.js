const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

// Write a comparison function first
const compareTeeth = (speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth;


//Then apply the funtion
const sortSpeciesByTeeth = arr =>{
  arr.sort(compareTeeth);
  return arr;
}

console.log(sortSpeciesByTeeth(speciesArray));