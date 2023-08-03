const array =["thrishna",23,2,10.00,Date()]
for(var ele in array){
    console.log(array[ele])
}
console.log("after change")
array.push("Sanjay")

for (var ele in array){
    console.log(array[ele])
}

console.log("After poping")
array.pop()
array.pop()
array.pop()
array.pop()
array.pop()
array.pop()
console.log(array)
for (var ele in array){
    console.log(array[ele])
}

if(array.length>0){
    console.log("elements are present")
    for (var ele in array){
        console.log(array[ele])

}}
else{
    console.log("No Elements")
}

array.push(1)
console.log(array)


//object//
b={
    Father:"Jayakumar",
    Mother:"Kavitha",
    Me: "Thrish",
    Bro: "Singam (Sanjai)",
    car: "Ferrai",


}

console.log(b['Father'])
console.log(b.Mother)
b.car ="McLaren"
console.log(b)
b.sunroof={shape:"Rectangle"}
console.log(b.sunroof.shape)

for (var ele in b){
    console.log(ele +":"+b[ele])
    if(typeof b[ele]==="object"){
        for (var val in b[ele]){
            console.log(val + ":"+ b[ele][val])
        }
    }
}

//function//

function kavi(){
    console.log(7 + 7+"7"+2)
}
kavi()

function jk(s,d){
    return s+d
}
console.log(jk(5,5))


