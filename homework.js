console.log('hello')

// Array methods

var fruits=["banana","orange","apple","mango"];
var me=fruits.splice(2,2,"lemon","kiwi")
console.log(me)
var fruits=["banana","orange","apple","mango"];
console.log(fruits.splice(0,1))
var arr1=["emil","tobaic","linus"];
var my=arr1.concat("peter");
console.log(my)

var fruits=["banana","orange","apple","mango"];
console.log(fruits.toString())
var fruits=["banana","orange","apple","mango"];
console.log(fruits.join('*'))

//string methods

var str= "Apple, Banana, Kiwi"
var res=str.slice(7,13)
console.log(res)
var str= "Apple, Banana, Kiwi"
var res=str.substr(7,6)
console.log(res)
var str= "Apple, Banana, Kiwi"
var res=str.substring(7,13)
console.log(res)

var str="please visit microsoft!"
var n=str.replace("microsoft","w3schools")
console.log(n)

//taking input from user

var name=window.prompt("what is your name?")
console.log("hey " + name + " how are you")