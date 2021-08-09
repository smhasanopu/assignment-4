//Assignment-4 
//Syed Mahadi Hasan Opu
//Programing Hero 4th Batch


// Problem No -1

/* function  seerToMon(seer) {
    const moon = seer / 40;
    return moon;  
}

const totalMoon = seerToMon(120);
console.log("Total", totalMoon "Moon "); */

// Problem No -2

/* function  totalSales(sartQuantity ,pantQuantity,kadesQuantity) {

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
const alltotalsales = totalSales(1,1,2);
console.log(alltotalsales);
 
 */

// Problem No -3

function deliveryCost(quantity) {
   //Delevary Charge 
   const first100dcharge   = 100;
   const second100dcharge  = 80;
   const third100updcharge = 50;

  if (quantity <= 100 ) {
      const total1stdcharge = quantity * first100dcharge; 
      return total1stdcharge;
  }
  else if(quantity <= 200){
      const first100quantity = 100 * first100dcharge;

      const restdeliverycharge = quantity - 100;
      const deliverycharge =restdeliverycharge * second100dcharge;

      const total2nddcharge =first100quantity + deliverycharge;
      return total2nddcharge;
  }
  else{
    const first100quantity = 100 * first100dcharge;
    const second100quantity = 100 * second100dcharge;

    const restdeliverycharge = quantity - 200;
    const rest3rddeliverycharge =restdeliverycharge * third100updcharge;

    const total3rddcharge = first100quantity + second100quantity + rest3rddeliverycharge;

    return total3rddcharge;

  }
 
 
}

//Total-Sales Quantity
const product = deliveryCost(220);
console.log(product);