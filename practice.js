 
 var phone=[
    
    {   title: 'Samsung', price: 11999},
    {   title: 'Oppo', price: 12999},
    {   title: 'Vivo', price: 16999}

 ]


//  console.log(phone[0].price);



 var leptop=[
    
    {   title: 'HP', price: 30999},
    {   title: 'Asus', price: 25999},
    {   title: 'Lenovo', price: 31999}

 ]
 
 
 var earphone=[
    
    {   title: 'Mi', price: 1000},
    {   title: 'Lenovo', price: 2000},
    {   title: 'Sumsung', price: 6000}

 ]


 var cloth=[
    
    {   title: 'T-shirt', price: 800},
    {   title: 'Shirt', price: 1500},
    {   title: 'Pant', price: 3000}

 ]
     
    

 var shope= phone[2].price + leptop[0].price + earphone[1].price + cloth[0].price

 
 console.log("Your Total price is =", shope ,"tk");


 if (shope>=50000){
     var discount= shope  * (50/100);
     var newPrice=shope-discount;

     
     console.log("You got 50% Discount =",discount,"tk");
     console.log("Now your Total Price =",newPrice,"tk");
 }
 
 else if(shope>=20000){
    var discount= shope  * (20/100);
    var newPrice=shope-discount;

    
    console.log("You got 20% Discount =",discount,"tk");
    console.log("Now your Total Price is =",newPrice,"tk");
    console.log("Thank you For Shoping our product");
 }
 else if(shope>=10000){
    var discount= shope  * (10/100);
    var newPrice=shope-discount;

    
    console.log("You got 10% Discount =",discount,"tk");
    console.log("Now your Total Price is =",newPrice,"tk");
    console.log("Thank you For Shoping our product");
 }
else{

    console.log("Thank you For Shoping our product");
}





 