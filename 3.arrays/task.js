function compareArrays(arr1, arr2) {
  const isEqual = arr1.every((element, index) => element === arr2[index]);
  if (isEqual) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function getUsersNamesInAgeRange(users, gender) {
  return users
    .filter((user) => user.gender === gender)
    .map((user) => user.age)
    .reduce(
      (accAge, userAge, index, array) => accAge + (userAge / array.length),
      0
    );
}
