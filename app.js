//destructering arrays
let [first, second, third] = [
  "Thomas",
  true,
  () => {
    console.log("hello");
  }
];

console.log(first);
console.log(second);
console.log(third);
third();

//spreading an array
function sum(x, y, z) {
  return x + y + z;
}
// console.log(sum(1, 2, 3));=
const numberArray = [1, 2, 3];
console.log(sum(...numberArray));

//where it makes sense => objects
const personObject = {
  fname: "Thomas",
  lname: "Smith"
};

let objectClone = personObject;
// let objectClone = { ...personObject };

objectClone.fname = "Bob";
// console.log(objectClone);
// console.log(personObject);
