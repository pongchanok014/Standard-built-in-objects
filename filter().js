const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 


const justCoolStuff = (arr1,arr2)=> {
  const sameArr = arr1.filter(item => {
    return arr2.includes(item); 
  // if !arr2.includes(items) will remove same items from arr1
  })
  return sameArr
}

console.log(justCoolStuff(myStuff, coolStuff))