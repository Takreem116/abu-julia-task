


var url =document.URL ;
var new_url= new URL(url);
var searh_id= new_url.searchParams;
var recipe_id = searh_id.get('id');


console.log(recipe_id);

var httpRequest= new XMLHttpRequest() ;
var result=[];

    httpRequest.open("GET" ,`https://forkify-api.herokuapp.com/api/get?rId=${recipe_id}`);
    httpRequest.send();
    httpRequest.onreadystatechange=function(){

        if(httpRequest.readyState==4){
            console.log(JSON.parse(httpRequest.response).recipe);
             result=JSON.parse(httpRequest.response).recipe;
             displayData();
          
            
        }
    }
  


    






   function displayData(){


    var data="";
    data+=`
    <div class="details">
    <h2> ${result.title}</h2>

    <img  class="img-fluid" src=" ${result.image_url}"/>
    </div>

    <h3> Ingredients</h3>
    <p class="w-75"> ${result.ingredients}</p>
    
    `;

document.getElementById("location").innerHTML=data;
   }