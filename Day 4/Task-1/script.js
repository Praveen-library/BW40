let obj1 = {name:"Person1", age:"5"};
let obj2 = {age:5, name:"Person1"};
console.log(JSON.stringify(obj1));
console.log(JSON.stringify(obj2));
if(obj1 == obj2)
{
    console.log("This object will be Same");
}
else{
    console.log("This object will not be Same");
}
