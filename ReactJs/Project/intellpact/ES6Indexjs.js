if (true) {
  let i = 0;
  const y = 10;
  var z = 11;
  console.log("i " + i);
  console.log("y " + y);
  console.log("z " + z);
}
//console.log("ii " + i);
//console.log("yy " + y);
console.log("zz " + z);

const greetPerson = (name) => {
  console.log("hello " + name);
};
greetPerson("Aadhya");

const [a, b, c] = [1, 2, 3];
console.log("a " + a);
console.log("b " + b);
console.log("c " + c);

const { name, age } = { name: "srikanth", age: 21 };
console.log("name " + name);
console.log("cage " + age);

class HelloSrikanth {
  constructor() {}
  printHello(name) {
    console.log("hello from class " + name);
  }
}
const hello = new HelloSrikanth();
hello.printHello("aadhya");
