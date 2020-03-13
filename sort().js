const sortYears = arr =>
  arr.sort((a,b) => {
    return b-a; // decending or most to less
  });

//if a-b = accending

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];

console.log(sortYears(years));

