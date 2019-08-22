let dateObj={
    "starTime": "2019-07-16",
    "endTime": "2019-09-27"
}
console.log(new Date().toLocaleDateString())
console.log(new Date(dateObj.starTime).toLocaleDateString());
console.log(new Date().toLocaleDateString()>=new Date(dateObj.starTime).toLocaleDateString());