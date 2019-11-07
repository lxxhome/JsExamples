
let list=[
    {email:'xx'},
    {email:'by'},
    {email:'wry'},
    {email:'sss'}
]

console.log(list.map(data=>data.email).reduce((previousValue, currentValue) => `${previousValue},${currentValue}`))
// console.log(list.reduce((accumulator, currentValue) => `${currentValue.property}`));