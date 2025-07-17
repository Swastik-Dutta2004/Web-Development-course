
// Select the database to use.
use('webDevelopmentDatabase');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
    {
      "name": "Java",
      "price": 20000,
      "instructor": "Swa"
    },
    {
      "name": "Python",
      "price": 15000,
      "instructor": "Anu"
    },
    {
      "name": "JavaScript",
      "price": 18000,
      "instructor": "Ravi"
    },
    {
      "name": "React",
      "price": 22000,
      "instructor": "Swa"
    },
    {
      "name": "C++",
      "price": 17000,
      "instructor": "Neha"
    }
  ]
);


// Print a message to the output window.
console.log(`Done inserting data`);

