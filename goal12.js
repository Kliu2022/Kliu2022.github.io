
var staticUrl = 'https://raw.githubusercontent.com/Kliu2022/Kliu2022.github.io/master/data/fao_losses_2013_na.json';
var staticUrl2 = 'https://raw.githubusercontent.com/Kliu2022/Kliu2022.github.io/master/data/faostat_production_2013_na.json';

var loss = [];
var prod = [];
var food = [];

len = 45;


$.getJSON(staticUrl, function(data) {
    console.log(data)
    len = data.length;
    for(i = 0; i < len; i = i + 1){
        loss.push(data[i].Value);
    }
  
});


$.getJSON(staticUrl2, function(data) {

    len = data.length;
    for(i = 0; i < len; i = i + 1){
        prod.push(data[i].Value)
        food.push(data[i].Item)
    }

    largest = loss[0]/prod[0];

    for(i = 0; i < len; i = i + 1){
        if(prod[i]!= 0 && prod[i]>=loss[i]){largest = Math.max(largest, loss[i]/prod[i]);}


    }

    iw = window.innerWidth-300


    for(i = 0; i < len; i = i + 1){
 
        vals = (loss[i]/prod[i])/largest*iw;
        if(loss[i]/prod[i] < 1 && loss[i]/prod[i] >0.03)
        {
            var div = document.createElement("div");
            var ds = document.getElementById("datasection");
            ds.appendChild(div);
            div.setAttribute("id","div"+i);  
            div.style.width = vals+"px";
            document.getElementById("div"+i).style.backgroundColor = "lightblue";

            var p = document.createElement("p");        
            document.getElementById("div"+i).appendChild(p);                
            p.setAttribute("id","p"+i);
            p.setAttribute("font-family", "Raleway, Arial, Helvetica, sans-serif");
            country = food[i];            
            p.innerHTML = "<pre>"+country+": "+Math.round(10000*loss[i]/prod[i]) / 100+"% lost"+"</pre>";


        }
        
    }
  
});



/*iw = window.innerWidth - 300;
    foodData = data[0].Value;
    val = parseInt(foodData);
    largest = val;
    len = data.length;

    for (i = 0; i < len; i = i + 1) {

        val = data[i].Value;
        
        if (isNaN(val) === false) {
            largest = Math.max(largest,val);
        }
    }
    
        col = ["lightblue"];*/

/*val = data[i].Value; 

console.log(val);
vals = val/largest*iw;

var div = document.createElement("div");
document.getElementById("datasection").appendChild(div);
div.setAttribute("id","div"+i);  
div.style.width = vals+"px";
document.getElementById("div"+i).style.backgroundColor = col[0];

var p = document.createElement("p");        
document.getElementById("div"+i).appendChild(p);                
p.setAttribute("id","p"+i);
p.setAttribute("font-family", "Raleway, Arial, Helvetica, sans-serif");
country = data[i].Item;                
p.innerHTML = "<pre>"+country+": "+val+"</pre>";)*/

