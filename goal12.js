
var staticUrl = 'https://raw.githubusercontent.com/Kliu2022/Kliu2022.github.io/master/data/fao_losses_2013_na.json';
var staticUrl2 = 'https://raw.githubusercontent.com/Kliu2022/Kliu2022.github.io/master/faostat_production_2013_na.json';





$.getJSON(staticUrl, function(data) {

    len = data.length;
    var loss = new Array(len);
    for(i = 0; i < len; i = i + 1){
        loss[i] = data[i];
    }
  
});


$.getJSON(staticUrl2, function(data) {

    len = data.length;
    var prod = new Array(len);
    for(i = 0; i < len; i = i + 1){
        prod[i] = data[i];
    }
  
});

Console.log(prod);
Console.log(loss);

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

val = data[i].Value; 

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
p.innerHTML = "<pre>"+country+": "+val+"</pre>";

