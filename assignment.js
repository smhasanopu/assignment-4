//Assignment-4 
//Syed Mahadi Hasan Opu
//Programing Hero 4th Batch

 // Problem Solving No -1

 function  seerToMon(seer) {
    const mon = seer / 40;
    return mon;  
}

const totalMon = seerToMon(120);
console.log("Total", totalMon , "Mon"); 
 

// Problem Solving No -2

 function  totalSales(sartQuantity ,pantQuantity,kadesQuantity) {
    //Per-Product-Price
    const SartPrice  = 100;
    const PantPrice  = 200;
    const kadesPrice = 500;

    //Total-Product-Price
    const totalsartprice  = sartQuantity  * SartPrice;
    const totalpantprice  = pantQuantity  * PantPrice;
    const totalkadesprice = kadesQuantity * kadesPrice;

    //All-Total-Price
    const alltotalprice = totalsartprice + totalpantprice + totalkadesprice;

    //Return All-Total-Price
    return alltotalprice;
}

//Total-Sales Quantity
const alltotalsales = totalSales(1,1,1);
console.log(alltotalsales);



// Problem Solving No -3

 function deliveryCost(quantity) {
   //variable- Delevary Charge 
   const first100dcharge   = 100;
   const second100dcharge  = 80;
   const third100updcharge = 50;

   //Error Validation
   if (quantity < 0 ){
        var Error = 'You are Naughty User. ';
        return Error;
   }
  if (quantity <= 100 ) {
      const total1stdcharge = quantity * first100dcharge;
      //Return 100p in delivary Charge  
      return total1stdcharge;
  }
  else if(quantity <= 200){
      const first100quantity = 100 * first100dcharge;
      const restdeliverycharge = quantity - 100;
      const deliverycharge =restdeliverycharge * second100dcharge;
      const total2nddcharge =first100quantity + deliverycharge;
      //Return 100p up delivary Charge 
      return total2nddcharge;
  }
  else{
    const first100quantity = 100 * first100dcharge;
    const second100quantity = 100 * second100dcharge;
    const restdeliverycharge = quantity - 200;
    const rest3rddeliverycharge =restdeliverycharge * third100updcharge;
    const total3rddcharge = first100quantity + second100quantity + rest3rddeliverycharge;
    //Return 200p up delivary Charge 
    return total3rddcharge;
  }
}
//Total Delivery Cost
const totaldeliveryCost = deliveryCost(205);
console.log(totaldeliveryCost);  
 
// Problem Solving No -4

let allFriends = ['Opu', 'Rose', 'Roki' , 'Rakib' ,'Rahman' ,'Hasib'];
function perfectFriend(friend) {
    var friendLength = 5;
    for (let i = 0; i < friend.length; i++) {
        if (friend[i].length == friendLength) {
            friendLength = friend[i];
            return friendLength;
        }  
    }

    //Error Validation check
    if (friendLength == 5) {
        var Error = 'You are Naughty User. ';
        return Error;
    }
}
let getFriend = perfectFriend(allFriends);
console.log(getFriend);
 

// Thank you