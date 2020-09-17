console.log(
  "This assignment should show my skills with array methods. Below, an array is provided with objects to which I will apply the methods and show their work."
);

const inventors = [
  {
    first: "Albert",
    last: "Einstein",
    year: 1879,
    passed: 1955,
  },
  {
    first: "Isaac",
    last: "Newton",
    year: 1643,
    passed: 1727,
  },
  {
    first: "Galileo",
    last: "Galilei",
    year: 1564,
    passed: 1642,
  },
  {
    first: "Marie",
    last: "Curie",
    year: 1867,
    passed: 1934,
  },
  {
    first: "Johannes",
    last: "Kepler",
    year: 1571,
    passed: 1630,
  },
  {
    first: "Nicolaus",
    last: "Copernicus",
    year: 1473,
    passed: 1543,
  },
  {
    first: "Max",
    last: "Planck",
    year: 1858,
    passed: 1947,
  },
  {
    first: "Katherine",
    last: "Blodgett",
    year: 1898,
    passed: 1979,
  },
  {
    first: "Ada",
    last: "Lovelace",
    year: 1815,
    passed: 1852,
  },
  {
    first: "Sarah E.",
    last: "Goode",
    year: 1855,
    passed: 1905,
  },
  {
    first: "Lise",
    last: "Meitner",
    year: 1878,
    passed: 1968,
  },
  {
    first: "Hanna",
    last: "Hammarström",
    year: 1829,
    passed: 1909,
  },
];

console.table(inventors);

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const filteredInventors = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
console.log(
  "1. Filter the list of inventors for those who were born in the 1500's"
);
console.table(filteredInventors);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

const inventorsNames = inventors.map(
  (inventor) => inventor.first + " " + inventor.last
);
console.log("2. Give us an array of the inventors first and last names");
console.table(inventorsNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const sortedInventors = inventors.sort((a, b) => a.year - b.year);
console.log("3. Sort the inventors by birthdate, oldest to youngest");
console.table(sortedInventors);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

const yearsAllTogether = inventors.reduce(
  (acc, inventor) => acc + (inventor.passed - inventor.year),
  0
);
console.log(
  "4. How many years did all the inventors live all together? " +
    "Answer is: " +
    yearsAllTogether
);
// 5. Sort the inventors by years lived

const sortedAsLived = inventors.sort(function (a, b) {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  return lastGuy > nextGuy ? -1 : 1;
});
console.log("5. Sort the inventors by years lived ");
console.table(sortedAsLived);

const otherPeople = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];
console.table(otherPeople);

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];
console.table(comments);

// Some and Every Checks

// Array.prototype.some() // is at least one person 19 or older?

const currentYear = new Date().getFullYear();
const isAdult = otherPeople.some((person) => currentYear - person.year >= 19);
console.log("is at least one person 19 or older?" + " Answer is: " + isAdult);

// Array.prototype.every() // is everyone 19 or older?

const allAdults = otherPeople.every(
  (person) => currentYear - person.year >= 19
);
console.log("is everyone 19 or older?" + " Answer is: " + allAdults);
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const thatComment = comments.find((comment) => comment.id === 823423);
console.log(
  "find the comment with the ID of 823423" +
    " Answer is: " +
    thatComment.text +
    " " +
    thatComment.id
);

// Array.prototype.findIndex()
// Find the comment with this ID
const thatCommentID = comments.findIndex((comment) => comment.id === 823423);
console.log(
  "find the comment index with the ID of 823423" +
    " Answer is: " +
    thatCommentID
);
console.log("then delete that comment");
// delete the comment with the ID of 823423
comments.splice(thatCommentID, 1);

console.table(comments);
