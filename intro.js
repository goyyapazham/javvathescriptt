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

//helper fibonacci generator
var fib = function(n) {
    if( n == 0 )
	return 0;
    else if( n <= 2 )
	return 1;
    else
	return fib(n-1) + fib(n-2);
}

//create counter
var i = 0;
//capture ordered list object thingy(?)
var ol = document.getElementById("anotha1");

//add event listener for second button
sloopjohn.addEventListener('click', function() {
    //create next list element
    var next = document.createElement("li");

    //use counter to generate next fibonacci #
    var tn = document.createTextNode( fib(i).toString() );

    //append next fibonacci item to list
    next.append(tn);
    ol.append(next);

    //increment counter
    i++;
});
