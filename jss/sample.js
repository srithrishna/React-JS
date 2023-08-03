var a = 20
console.log("This is the value before :" + a)
{
    var a =20
    console.log("This is after changing" + a)
}
console.log("This is the value before :" + a)

let b = 140
console.log("This is the value:" + b)
{
    let b =20
    console.log("This is after changing " + b)  
}
console.log("This is the value:" + b)

const c = 140
console.log("This is the value:" + c)

const d= 5
console.log("This is the value:" + d)

let a = 0
console.log(a)
if (a==0){
    a=a+1
    console.log(a)
}
else if(a>0){
    console.log("The number is positive")
}
else{
    console.log("The number is negative")
} 

a=5
for(i=0; i<a;i++ ){
    console.log(i)
}

i=0
while(i < a){
    console.log(i)
    i++
}


array=[10,20]
array.forEach(element => console.log(element))


