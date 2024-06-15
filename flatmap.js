const products = [

{id:1,name:"Iphone",price:1000},
{id:2,name:"Android",price:2000},
{id:3,name:"apple",price:3000},
{id:4,name:"samsung",price:4000},
];
var prod = products.flatMap(
        (p)=>{
            if(p.name=="apple" || p.price==4000){
            // return p;
             var p2 = {...p,name:"nokia",price:p.price+(p.price*10/100)};
             return [p,p2]; 

            }else{
                return [p];
            }
         }
);
console.log(prod);