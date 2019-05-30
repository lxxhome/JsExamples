let price=require('./priceNum')

let status = "200";
if (status == 200) {
    console.log(true)
} else {
    console.log(false)
}

let a=price.lowThreshold["SELECTED"];
let b=a||10;
console.log(a)
console.log(b);