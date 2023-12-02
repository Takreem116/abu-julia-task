var httpRequest= new XMLHttpRequest() ;
var result=[];

 function getRecipe(recipe){


    httpRequest.open("GET" ,`https://forkify-api.herokuapp.com/api/search?q=${recipe}`);
    httpRequest.send();
    httpRequest.onreadystatechange=function(){

        if(httpRequest.readyState==4){

            result=JSON.parse(httpRequest.response).recipes;

          
            displayData();
        }
    }
}



function displayData(){
var data="";


for( var i=0 ;i<result.length; i++){

    data+=`


    <div class="col-lg-4">
    <div class="recipe">
    <h2> ${result[i].title}</h2>

    <img  class="img-fluid" src=" ${result[i].image_url}"/>

    <a href="details.html?id=${result[i].recipe_id}" > read more </a>
    
    </div>
    </div>
    `;
}


document.getElementById("allRecipe").innerHTML=data;
}


var allLinks= document.querySelectorAll(".nav-link");
for(var i=0; i<allLinks.length;i++){
allLinks[i].addEventListener('click' , function(e){
 getRecipe(e.target.innerHTML);

})

}

getRecipe("pizza");

