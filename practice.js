 
//  var phone=[
    
//     {   title: 'Samsung', price: 11999},
//     {   title: 'Oppo', price: 12999},
//     {   title: 'Vivo', price: 16999}

//  ]


// //  console.log(phone[0].price);



//  var leptop=[
    
//     {   title: 'HP', price: 30999},
//     {   title: 'Asus', price: 25999},
//     {   title: 'Lenovo', price: 31999}

//  ]
 
 
//  var earphone=[
    
//     {   title: 'Mi', price: 1000},
//     {   title: 'Lenovo', price: 2000},
//     {   title: 'Sumsung', price: 6000}

//  ]


//  var cloth=[
    
//     {   title: 'T-shirt', price: 800},
//     {   title: 'Shirt', price: 1500},
//     {   title: 'Pant', price: 3000}

//  ]
     
    

//  var shope= phone[2].price + leptop[0].price + earphone[1].price + cloth[0].price

 
//  console.log("Your Total price is =", shope ,"tk");


//  if (shope>=50000){
//      var discount= shope  * (50/100);
//      var newPrice=shope-discount;

     
//      console.log("You got 50% Discount =",discount,"tk");
//      console.log("Now your Total Price =",newPrice,"tk");
//  }
 
//  else if(shope>=20000){
//     var discount= shope  * (20/100);
//     var newPrice=shope-discount;

    
//     console.log("You got 20% Discount =",discount,"tk");
//     console.log("Now your Total Price is =",newPrice,"tk");
//     console.log("Thank you For Shoping our product");
//  }
//  else if(shope>=10000){
//     var discount= shope  * (10/100);
//     var newPrice=shope-discount;

    
//     console.log("You got 10% Discount =",discount,"tk");
//     console.log("Now your Total Price is =",newPrice,"tk");
//     console.log("Thank you For Shoping our product");
//  }
// else{

//     console.log("Thank you For Shoping our product");
// }




var a=10;
var b=90;
var c=80;



if (a<b && b<c ) {
   console.log(a,b,c);
} else if (a<b && c<b) {
   console.log(a,c,b);
}else if(b<a && a>c){
   console.log(b,a,c);
}

else if (b<a && a>c){
   console.log(b,c,a);
}
else if (c<a && b>a){
   console.log(c,a,b);
}
else {
   document.write(c, b , a);
 }






 var year = 2000;
 
 if(year%400==0) {
   console.log(year,"This is Leap Year");
}
else if (((year%4)==0)&& ((year%100)!=0)) {
  console.log(year,"This is Leap Year");
}
else{
   console.log(year,"is not Leap Year");
}