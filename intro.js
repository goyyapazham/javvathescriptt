var addChildOnClick = function() {

    //create vars
    var list = document.getElementById("thelist");
    var li = document.createElement("li");
    var tn = document.createTextNode(
	"item " + Math.floor((Math.random() * 15)).toString()
    );

    //add text to list element to be appended
    li.appendChild(tn);

    //add event listeners to list element to be appended
    li.addEventListener('click', function() {
	this.remove();
    });
    li.addEventListener('mouseover', function() {
	document.getElementById("h").innerHTML = this.innerHTML;
    });
    li.addEventListener('mouseout', function() {
	document.getElementById("h").innerHTML = "Hello World!";
    });

    //append list element to list
    list.appendChild(li);
    
};

//add event listener to the button
b.addEventListener('click', addChildOnClick);

//create list of list elements (only contains those already in the html)
elements = document.getElementsByTagName("li");

//iterate thru list &...
for ( var i=0; i < elements.length; i++ ) {

    ///...add event listeners
    elements[i].addEventListener('click', function() {
	this.remove();
    });
    elements[i].addEventListener('mouseover', function() {
	document.getElementById("h").innerHTML = this.innerHTML;
    });
    elements[i].addEventListener('mouseout', function() {
	document.getElementById("h").innerHTML = "Hello World!";
    });
    
}
