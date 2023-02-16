/******************************************
 @*@--Tasks----@*@
 Anonymouos and IIFE funcation practice
 1. Print odd number in an array:
*******************************************/
--------------------------
Anonymous function :
---------------------------
let odd = [];
let result = function(arr)
{
  for(var i=0;i<arr.length;i++)
  {
    if(arr[i]%2==1)
    {
       odd.push(arr[i]);
    }
  }
  return result;
}
result([8, 19, 5, 6, 14, 9, 13]);
console.log(odd);
--------------------------
IIFE function :
---------------------------
let odd = [];
(function result(arr)
{
  for(var i=0;i<arr.length;i++)
  {
    if(arr[i]%2==1)
    {
       odd.push(arr[i]);
    }
  }
})
([8, 19, 5, 6, 14, 9, 13]);
console.log(odd);
---------------------------------------
Arrow function : using filter method
---------------------------------------
let number = [8, 19, 5, 6, 14, 9, 13];

let odd = number.filter((num)=> num%2 == 1);
console.log(odd);
/************************************************************
 2) Convert all the Strings to title caps in string array
*************************************************************/
--------------------------
Anonymous function :
---------------------------
let test = function(words)
{
  let result = words.split(" ");
  for(var i=0;i<result.length;i++)
  {
    result[i] = result[i][0].toUpperCase()+result[i].slice(1);
  }
  return result.join();
}
console.log(test("praveen kumar corporate leadership"));
--------------------------
IIFE function :
---------------------------
let arr = [];
(function test(words)
{
  let result = words.split(" ");
  for(var i=0;i<result.length;i++)
  {
    result[i] = result[i][0].toUpperCase()+result[i].slice(1);
    result.join();
  } 
  console.log(result);
})("praveen kumar corporate leadership")

--------------------------
Arrow function :
---------------------------
let test =(words)=>
{
  let result = words.split(" ");
  for(var i=0;i<result.length;i++)
  {
    result[i] = result[i][0].toUpperCase()+result[i].slice(1);
  }
  return result.join();
}
console.log(test("praveen kumar corporate leadership"));

/************************************************************
 3) Sum of all numbers in an array.
*************************************************************/
--------------------------
Anonymous function :
---------------------------
let sum=0;
let result = function (arr)
{
  for(var i=0;i<arr.length;i++)
  {
      sum = sum+arr[i];  
  }
  return sum;
}
console.log(result([2,4,5,12,20]));
--------------------------
IIFE function :
---------------------------
let sum=0;
(function result(arr)
{
  for(var i=0;i<arr.length;i++)
  {
      sum = sum+arr[i];  
  }
  return sum;
})
([2,4,5,12,20]);
console.log(sum);
--------------------------
Arrow function :
---------------------------
let sum=0;
let result = (arr)=>
{
  for(var i=0;i<arr.length;i++)
  {
      sum = sum+arr[i];  
  }
  return sum;
}
console.log(result([2,4,5,12,20]));
/************************************************************
 4)Return all the prime numbers in an array
*************************************************************/
--------------------------
Normal function :
---------------------------
   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,13,15,18];
   function isPrime(num) {
    for (let i = 2;i<num; i++) {
      if (num % i == 0) {
           return false;
      }
    }
   return num > 1;  // print the 1 above number
  } 
console.log(numbers.filter(isPrime));

//Respresent String:
function test(start,end){
for(var num=start; num<end; num++)
{
    var  pNumber = true;
    
  for(var limit=2; limit<num; limit++)
  {
     if(num%limit == 0)
     {
        pNumber = false;
     }
  }
  if(pNumber == true)
  {
    console.log(limit); 
  }
}
}
test(2,15);
--------------------------
Anonymous function :
---------------------------
   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,13,15,18];
   let isPrime = function(num) {
    for (let i = 2; num > i; i++) {
      if (num % i == 0) {
           return false;
      }
    }
   return num > 1;  // print the 1 above number
  }
const primeNumbers = numbers.filter(isPrime);
console.log(primeNumbers);

//Respresent String:
let test = function(start,end){
for(var num=start; num<end; num++)
{
    var  pNumber = true;
    
  for(var limit=2; limit<num; limit++)
  {
     if(num%limit == 0)
     {
        pNumber = false;
     }
  }
  if(pNumber == true)
  {
    console.log(limit); 
  }
}
}
test(2,25);
--------------------------
IIFE function :
---------------------------

//Respresent String:
(function test(start,end){
for(var num=start; num<end; num++)
{
    var  pNumber = true;
    
  for(var limit=2; limit<num; limit++)
  {
     if(num%limit == 0)
     {
        pNumber = false;
     }
  }
  if(pNumber == true)
  {
    console.log(limit); 
  }
}
})
(2,25);
--------------------------
Arrow function :
---------------------------
notes@@:
//Prime is 1 and number itself right so If multiple extra number it is not prime so we can choose number "2".
//Example : 1 vandhu apply aagadhu so namma next 2 number choose pannrom.
//why means 2 vachii panna extra multiple calculation vara number return false panniranum.
const numbers = [1,2, 3, 4, 5, 6, 7, 8, 9, 10,13,15,18];
   let isPrime = (num)=> {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
           return false;
      }
    }
   return num > 1;  // print the 1 above number
  }
const primeNumbers = numbers.filter(isPrime);
console.log(primeNumbers);
/************************************************************
 5) Return all the palindromes in an array
*************************************************************/
--------------------------
Anonymous function :
---------------------------
let palindrome = function(arr){
  
  let result = [];
  //forEach inline callback function
  arr.forEach(function(title){
    if(title === title.split("").reverse().join(""))
    {
          result.push(title); 
    }
  });
  return result;
}
console.log(palindrome(["level","cinic","atoms","earth","venue"]));
--------------------------
IIFE function :
---------------------------
let palindrome = function(arr){
  
  let result = [];
  //forEach inline callback function
  arr.forEach(function(title){
    if(title === title.split("").reverse().join(""))
    {
          result.push(title); 
    }
  });
  console.log(result);
}
(["level","cinic","atoms","earth","venue"]);


--------------------------
Arrow function :
---------------------------
let palindrome = (arr) =>{
  
  let result = [];
  //forEach inline callback function
  arr.forEach(function(title){
    if(title === title.split("").reverse().join(""))
    {
          result.push(title); 
    }
  });
  return result;
}
console.log(palindrome(["level","cinic","atoms","earth","venue"]));
// let words = ["level","cinic","atoms","earth","venue"];
// console.log(palindrome(words));
--------------------------------------------------------------------
Without forEach using palindrome: maybe execution time will more]
-------------------------------------------------------------------
let palindrome = (arr) =>{
  
  let result = [];
  //forEach inline callback function
  for(var i=0;i<arr.length;i++)
  {
    
    if(arr[i]=== arr[i].split("").reverse().join(""))
    {
          result.push(arr[i]); 
    }
  }
  return result;
}
console.log(palindrome(["level","cinic","atoms","earth","venue"]));
/************************************************************
 6) Return median of two sorted arrays of the same size.
*************************************************************/
solution:
https://gist.githubusercontent.com/lavishjain36/0961c88c46e0a55c898a5ec6f7654e66/raw/dbdbb7c60a5ed006169319808502b5993cacf3eb/gistfile1.txt
--------------------------
Anonymous function :
---------------------------
let medianOfTwoSortedArrays = function(arr1, arr2) {
    let m1 = -1, m2 = -1;
    let i = 0, j = 0;
    let n = arr1.length;

    for (let count = 0; count <= n; count++) {
        
        if (i === n) {
            m1 = m2;
            m2 = arr2[0];
            break;
        }
        
        else if (j === n) {
            m1 = m2;
            m2 = arr1[0];
            break;
        }
       
        if (arr1[i] < arr2[j]) {
            m1 = m2;
            m2 = arr1[i];
            i++;
        }
       
        else {
            m1 = m2;
            m2 = arr2[j];
            j++;
        }
    }

    if (n % 2 === 0) {
        
        return (m1 + m2) / 2;
    }
    else {
        
        return m2;
    }
}
let arr1 = [1, 14, 35, 26, 38];
let arr2 = [2, 19, 27, 32, 48];
console.log(medianOfTwoSortedArrays(arr1, arr2)); 
--------------------------
IIFE function :
---------------------------
(function(arr1, arr2) {
    let m1 = -1, m2 = -1;
    let i = 0, j = 0;
    let n = arr1.length;

    for (let count = 0; count <= n; count++) {
        
        if (i === n) {
            m1 = m2;
            m2 = arr2[0];
            break;
        }
        
        else if (j === n) {
            m1 = m2;
            m2 = arr1[0];
            break;
        }
       
        if (arr1[i] < arr2[j]) {
            m1 = m2;
            m2 = arr1[i];
            i++;
        }
       
        else {
            m1 = m2;
            m2 = arr2[j];
            j++;
        }
    }

    if (n % 2 === 0) {
        
        return (m1 + m2) / 2;
    }
    else {
        
        console.log(m2);
    }
})
([1, 14, 35, 26, 38],[2, 19, 27, 32, 48])
// console.log(medianOfTwoSortedArrays(arr1, arr2)); 
/************************************************************
 7) Remove duplicates from an array
*************************************************************/
----------------------------------------------------
@@Reduce method using find duplication in an array :
-----------------------------------------------------
var arr = ["Praveen","Ajax","Router","Praveen","Router","Providers","Ajax"];

function unique(arr){
  
  return [...new Set(arr)];   //The Set object lets you store unique values of any type
console.log(unique(arr));
--------------------------
Arrow function :
---------------------------
var arr = ["Praveen","Ajax","Router","Praveen","Router","Providers","Ajax"];

let duplicate = (arr)=>
{   
    let unique = arr.reduce(function(acc,curr)
    {
      if(!acc.includes(curr))
        acc.push(curr);
        return acc;
        
    },[]);
  return unique;
}
console.log(duplicate(arr));
--------------------------
Anonymous function :
---------------------------
var arr = ["Praveen","Ajax","Router","Praveen","Router","Providers","Ajax"];

let duplicate = function(arr)
{   
    let unique = arr.reduce(function(acc,curr)
    {
      if(!acc.includes(curr))
        acc.push(curr);
        return acc;
        
    },[]);
  return unique;
}
console.log(duplicate(arr));
--------------------------
IIFE function :
---------------------------
var arr = ["Praveen","Ajax","Router","Praveen","Router","Providers","Ajax"];

(function duplicate(arr)
{   
    let unique = arr.reduce(function(acc,curr)
    {
      if(!acc.includes(curr))
        acc.push(curr);
        return acc;
        
    },[]);
  console.log(unique);
})
(arr);
/************************************************************
 8) Rotate an array by k times
*************************************************************/
--------------------------
Normal function :
---------------------------
let arr = [2,3,4,5,6];
let n = arr.length;
let k = 2;
function rotatearray(a,n,k)
{
    let temp = [];
    for(var i=0; i<n; i++)
    {
      if(i<k)
      {
        temp.push(a[i+n-k]); 
      }
      else
      {
        temp.push(a[i-k]);
      }  
    }
    return temp;
}
console.log(rotatearray(arr,n,k));
--------------------------
@@@Code optimization :
---------------------------
1. unshift()
//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
2. pop()
//The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

const rotateArray1 = function(nums, k) {
  for (let i = 0; i < k; i++) {
      nums.unshift(nums.pop());
  }

  return nums;
}
console.log(rotateArray1([2,3,4,5,6],2));
--------------------------
Anonymous function :
---------------------------
let arr = [2,3,4,5,6];
let n = arr.length;
let k = 2;

let rotatearray = function(a,n,k)
{
    let temp = [];
    for(var i=0; i<n; i++)
    {
      if(i<k)
      {
        temp.push(a[i+n-k]); 
      }
      else
      {
        temp.push(a[i-k]);
      }  
    }
    return temp;
}
console.log(rotatearray(arr,n,k));
--------------------------
IIFE function :
---------------------------
let arr = [2,3,4,5,6];
let n = arr.length;
let k = 2;

(function rotatearray(a,n,k)
{
    let temp = [];
    for(var i=0; i<n; i++)
    {
      if(i<k)
      {
        temp.push(a[i+n-k]); 
      }
      else
      {
        temp.push(a[i-k]);
      }  
    }
    console.log(temp);
})
(arr,n,k);