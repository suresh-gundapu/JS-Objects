var products =  [

{id:1,productName:"tv", price:1000},
{id:2,productName:"tv1", price:2000},
{id:3,productName:"tv2", price:3000},

];

console.log(products.every(


(p)=>{
   return p.price >= 2000;
}
));