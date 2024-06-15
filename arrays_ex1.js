arrays1 = [
  { id: 1, brand: "samsung", price: 1000 },

  { id: 1, brand: "vivo", price: 2000 },

  { id: 1, brand: "apple", price: 3000 },

  { id: 1, brand: "realme", price: 4000 },
];

arrays2 = [
  {
    id: 2,
    brand: "samsung",
    price: 1000,
    quantity: 0,
    inc: () => {
      this.quantity++;
    },
  },

  {
    id: 2,
    brand: "vivo",
    price: 2000,
    quantity: 0,
    inc: () => {
      this.quantity++;
    },
  },

  {
    id: 2,
    brand: "apple",
    price: 3000,
    quantity: 0,
    inc: () => {
      this.quantity++;
    },
  },

  {
    id: 2,
    brand: "realme",
    price: 4000,
    quantity: 0,
    inc: () => {
      this.quantity++;
    },
  },
];

//push,pop,splice,concat,every,some,filter,find,findIndex,foreach
// console.log(arrays1.push(
//     {id:1,brand:"redmi",price:5000},
//     ));
// arrays1.pop();
// arrays1.splice(1,1);

// arrays1.splice(1,1,{id:1,brand:"vivo",price:2000});

// let new_arr=arrays1.concat(arrays2);
// console.log(new_arr.length);
// console.log(new_arr);

// let new_arr=arrays1.some((p)=>{
// return p.price>2000;
// });

// let new_arr = arrays2.forEach((p) => {
//   p.inc();
// });
// console.log(new_arr);

console.log(arrays1.splice(2,1));

console.log(arrays1);