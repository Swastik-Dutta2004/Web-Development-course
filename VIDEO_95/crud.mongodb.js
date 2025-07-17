use("curddb")
db.createCollection("courses")

db.courses.insertOne({
    name:"swa learning web dev but not have so much time",
    price:1000000,
    assignment:5000,
    poject:10000
})

db.courses.insertMany([
    {
      "name": "Swa learning web dev but not have so much time",
      "price": 1000000,
      "assignment": 500
    },
    {
      "name": "Swa started backend with Node.js but still confused about routes",
      "price": 850000,
      "assignment": 450
    },
    {
      "name": "Swa is trying to understand async JS but it's too tricky",
      "price": 920000,
      "assignment": 300
    },
    {
      "name": "Swa learning React but useState still confusing",
      "price": 1100000,
      "assignment": 400
    },
    {
      "name": "Swa doing full-stack course but facing time issues",
      "price": 1200000,
      "assignment": 550
    }
  ])

  let a = db.courses.find({price:1000000})
  console.log(a);
  
  
  console.log(a.toArray());