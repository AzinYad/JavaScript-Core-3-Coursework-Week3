let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];

function whoLivesInGryffindor(hogwarts) {
  for (let obj in hogwarts) {
    let { firstName, lastName, house } = hogwarts[obj];

    if (house === "Gryffindor") console.log(`${firstName} ${lastName}`);
  }
}
whoLivesInGryffindor(hogwarts);

// function whoLivesInGryffindor(arr) {
//   arr.forEach(({ firstName, lastName, house }) => {
//     if (house === "Gryffindor") console.log(`${firstName} ${lastName}`);
//   });
// }
// whoLivesInGryffindor(hogwarts);

function teacherOwnsPet(arr) {
  for (let obj in arr) {
    let { firstName, lastName, pet, occupation } = arr[obj];
    if (pet !== null && occupation === "Teacher")
      console.log(`${firstName} ${lastName}`);
  }
}

teacherOwnsPet(hogwarts);

// function petTeacher(arr) {
//   arr.forEach(({ firstName, lastName, pet, occupation }) => {
//     if (pet !== null && occupation === "Teacher")
//       console.log(`${firstName} ${lastName}`);
//   });
// }

// petTeacher(hogwarts);
