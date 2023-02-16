var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload = function(){        //onload is a event
    var result = JSON.parse(request.response);
    for(var i=0;i<result.length;i++)
    {
        console.log(result[i].name);
        console.log(result[i].region);
        console.log(result[i].subregion);
        console.log(result[i].population);
    }
}