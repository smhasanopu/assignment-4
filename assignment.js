//Assignment-4 
//Syed Mahadi Hasan Opu
//Programing Hero 



// Problem No -1

/* function  seerToMon(seer) {
    const moon = seer / 40;
    return moon;  
}

const totalMoon = seerToMon(120);
console.log("Total", totalMoon "Moon "); */

// // Problem No -2

function  totalSales(sartQuantity ,pantQuantity,kadesQuantity) {

    const perSartPrice  = 100;
    const perPantPrice  = 200;
    const perkadesPrice = 500;

    const sartQ  = sartQuantity  * perSartPrice;
    const pantQ  = pantQuantity  * perPantPrice;
    const cadesQ = kadesQuantity * perkadesPrice;


    const totalproduct = sartQ +pantQ + cadesQ;
    return totalproduct;
}

const total = totalSales(0,0,5);
console.log(total);

