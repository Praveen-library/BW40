//Problem: 1
//Get all the countries from the Asia continent /region using the Filter function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result= JSON.parse(request.response);
    console.log(result);
   let asia = result.filter((ele)=>
            {
                if(ele.region === "Asia"){
                    return ele.name;
                }
            });
 }
console.log(asia);

//Problem: 2
//Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result= JSON.parse(request.response);
    console.log(result);
    let pop =  result.filter((ele)=> {
         return ele.population < 200000;
    console.log(pop);
}

//Problem: 3
//Print the following details name, capital, flag using forEach function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result= JSON.parse(request.response);
    result.forEach((ele)=>{
        console.log(ele.name,ele.capital,ele.flag);
    });
}

//Print the total population of countries using reduce function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result= JSON.parse(request.response);
    let pop = result.reduce((acc,cv)=>
    {
        return acc+cv.population;     // cv means it is current element
    },0)
    console.log(pop);
}


//Print the country which uses US Dollars as currency.
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result= JSON.parse(request.response);
    console.log(result);
    var currency = result.filter((ele)=>{
        return ele.currencies[0].code == "USD";
    }).map((ele)=>{
        return ele.name;
    })
    console.log(currency);

}



