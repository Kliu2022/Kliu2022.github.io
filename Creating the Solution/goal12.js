
var staticUrl = 'https://raw.githubusercontent.com/Kliu2022/Kliu2022.github.io/master/Creating%20the%20Solution/data/data.json';
var staticUrl2 = 'https://raw.githubusercontent.com/Kliu2022/Kliu2022.github.io/master/Creating%20the%20Solution/data/data7eia.json'; 




$.getJSON(staticUrl, function(data) {

     console.log(data)//12

    iw = window.innerWidth - 300;
    countryData = data.fact[1].Value;
    val = parseInt(countryData);
    largest = val;
    len = data.fact.length;
    regions = [0,1,2,4,5,6,8,9,12,14,15];


    for (i = 0; i < 11; i = i + 1) {


    	k = 2*parseInt(regions[i])+1;
    	console.log(k);
        countryData = data.fact[k].Value;
        val = parseInt(countryData);
        
        if (isNaN(val) === false) {
            largest = Math.max(largest,val);
        }
    }
    
		col = ["lightblue"];

		


    for (i = 0; i < 11; i = i + 1) {

    	k = 2*parseInt(regions[i])+1;
        countryData = data.fact[k].Value;

		val = countryData; //convert val1 to into int E

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
        country = data.fact[k].dims.UNREGION;                
        p.innerHTML = "<pre>"+country+": "+val+"</pre>";


    }

   

  
});

$.getJSON(staticUrl2, function(data2) {

    iw = window.innerWidth - 200;
    
    console.log(data2)//12
    var dataSums = [0,0,0,0,0,0,0,0,0,0,0,0];
//
    /*for(i = 0; i < 11; i = i+1) 
    {
        for(int j = 0; j < 11; j = j + 1)
        {
            dataSums[i] += data2[j].
        }
    }*/

    
    
  
});