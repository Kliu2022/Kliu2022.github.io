var enterbtn = document.getElementById("enter");
console.log(enterbtn);
var input = document.getElementById("userinput");
var processbtn = document.getElementById("process");
var dropdown = document.getElementById("dropdown");
var ul = document.querySelector("ul");
const app = new Clarifai.App({apiKey: '2df7e9fbb5284537a2d93b95f7959693'});

enterbtn.addEventListener("click", clickedEnter);
processbtn.addEventListener("click", clickedProcess);
input.addEventListener("keypress", keyPressed);
dropdown.addEventListener("change", dropdownChange);

var resp = "";  //will store response from clarifai lol
var img1 = "http://farm1.static.flickr.com/228/499181350_b01a280789.jpg";//5t0r35 4 54mpl3 1m4g3
var img2 = "https://amp.businessinsider.com/images/579a123add0895fb558b4972-750-751.png"//5t0r35 4 54mpl3 1m4g3
var img3 = "https://clarifai.com/cms-assets/20180320212157/food-001.jpg"//5t0r35 4 54mpl3 1m4g3
var img4 = "https://community.clarifai.com/uploads/default/original/1X/f78720b7d2233009c39d30974f0c4d0f1e4ed5a6.jpg"//5t0r35 4 54mpl3 1m4g3
var img5 = "https://image.shutterstock.com/display_pic_with_logo/136306/722718082/stock-photo-healthy-food-clean-eating-selection-fruit-vegetable-seeds-superfood-cereals-leaf-vegetable-on-722718082.jpg"//5t0r35 4 54mpl3 1m4g3
var image = img1; //5t0r3 4ct1v3 1m4g3

function clickedEnter() {
    console.log("clickedButton function called");
}

function clickedProcess () {
    console.log("clickedProcess function called");
    processImage()
}

function keyPressed(event) {
    console.log("keyPressed function called");
    console.log(event.keyCode); //gives the code associated with the key pressed.
    console.log(event.key); //The actual key and case}
}


function dropdownChange() {
    console.log("dropdownChange function called");
    ddval = dropdown.value; 
	if (ddval == "ti1") {
	  image = img1;
	} else if (ddval == "ti2") {
	  image = img2;
	} else if (ddval == "ti3") {
	  image = img3;
	} else if (ddval == "ti4") {
	  image = img4;
	}
	else if (ddval == "ti5") {
	  image = img5;


	}
	pageUpdate()
}

function pageUpdate() {

	document.getElementById("picture").src = image; //set the picture image to the value in the box
}

function processImage() {
    app.models.predict("bd367be194cf45149e75f01d59f77ba7", image).then(

		    function(response) {
		      // do something with response
		      resp = response; 
		      console.log(response)
		    },

		    function(err) {
		      // there was an error
		    }
	  );

	while (ul.getElementsByTagName("li").length > 0) {
	    ul.removeChild(ul.childNodes[0])
	}
    
    len = 20;
 	 for (i = 0; i < len; i++) {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(resp.outputs[0].data.concepts[i].name+" - " +(resp.outputs[0].data.concepts[i].value*100).toFixed(2)));
      ul.appendChild(li);
 }
}
