const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// FOR EACH 
// we just want to console.log the array, or a value like the name
// normal for loop like it was used before, now considered old practice
for(let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
}

// with the forEach the solution is way more elegant
forEach
companies.forEach(function(company) {
    console.log(company.name);
});


// FILTER
// on the ages array we want to get 21 and older
// with for loop we had to do the following
let canDrink = [];
for(let i = 0; i < ages.length; i++) {
    if(ages[i] >= 21) {
        canDrink.push(ages[i]);
    }
}
console.log(canDrink);

// with the filter loop again simpler and more elegant
const canDrink = ages.filter(function(age) {
    if(age >= 21) {
        return true;;
    }
});
console.log(canDrink)

// we can do it even more elegant with an arrow funtion
const canDrink = ages.filter(age => age >= 21);
console.log(canDrink);

// if we want to find just retail companies
const retailCias = companies.filter(function(company){
    if (company.category === 'Retail'){
        return true;
    }
});
// or
const retailCias = companies.filter(company => company.category === 'Retail')
console.log(retailCias)


// MAP
// we want to create an array of company names
const companyNames = companies.map(function(company){
    return company.name;
});
console.log(companyNames)

// with arrow function
const companyNames = companies.map(company => company.name);

console.log(companyNames)


// SORT
// sort companies by start year
const sortedCompanies = companies.sort(function(a, b){
    if(a.start > b.start) {
        return 1;
    } else {
        return -1;
    }
});
console.log(sortedCompanies)

// or with arrow function
const sortedCompanies = companies.sort((a,b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies)

// to sort ages
const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges)


// REDUCE
// to get the sum of all the ages
const ageSum = ages.reduce(function(total, age) {
    return total + age;
}, 0);
console.log(ageSum)

// with arrow method
const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum)