function seerToMon(number) {
  if (number < 0) {
    console.log("Please enter positive input");
  } else {
    const convertSeer = number / 40;
    return convertSeer;
  }
}

//declere the input number
let inputNumber = 80;
const result = seerToMon(inputNumber);
console.log(result);

function totalSales(shirtqty, pantqty, shoesqty) {
  if (shirtqty < 0 || pantqty < 0 || shoesqty < 0) {
    console.log("only positive quantity in allowed");
  } else if (
    typeof shirtqty == "string" ||
    typeof pantqty == "string" ||
    typeof shoesqty == "string"
  ) {
    console.log("You are enter string");
  } else {
    let shirtPrice = shirtqty * 100;
    let pantPrice = pantqty * 200;
    let shoesPrice = shoesqty * 500;
    // calculate the total price
    let total = shirtPrice + pantPrice + shoesPrice;
    return total;
  }
}
// define the quantity
let totalShirtqty = 3;
let totalPantqty = 3;
let totalShoesqty = 12;

const totalPrice = totalSales(totalShirtqty, totalPantqty, totalShoesqty);
console.log(totalPrice);

function deliveryCost(shirtQty) {
  if (shirtQty < 0) {
    console.log("Please enter the positive quantity");
  } else if (shirtQty <= 100) {
    let planOne = shirtQty * 100;
    return planOne;
  } else if (shirtQty > 100 && shirtQty <= 200) {
    // calculate various plan
    let planOne = 100 * 100;
    let planTwo = (shirtQty - 100) * 80;
    return planOne + planTwo;
  } else {
    // calculate various plan
    let planOne = 100 * 100;
    let planTwo = 100 * 80;
    let planThree = (shirtQty - 200) * 50;
    return planOne + planTwo + planThree;
  }
}
// declere the total quantity
let toralqty = 220;
const totaDeliveryCost = deliveryCost(toralqty);
console.log(totaDeliveryCost);

function perfectFriend(input) {
  for (friend of friends) {
    if (friend.length == 5) {
      return friend;
    }
  }
  // not found the friend int the friends array
  return "Not found such friend name";
}
// declere result
let friends = [
  "Raj",
  "Karim sarker",
  "Jack strøm",
  "karim",
  "kabir",
  "md rahmat ullah sen",
];
const findFriend = perfectFriend(friends);
console.log(findFriend);
