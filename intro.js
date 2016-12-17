<<<<<<< HEAD
var addChildOnClick = function() {

    var list = document.getElementById("thelist");
    var li = document.createElement("li");
    var tn = document.createTextNode(
	"Random: " + Math.floor((Math.random() * 100)).toString()
    );
    
    li.appendChild(tn);
    list.appendChild(li);
    
};

var changeHeaderOnHover = function() {

    
    
}

b.addEventListener('click', addChildOnClick);

for node in document.getElementsByTag("li") {

}
=======
var myList = document.getElementsById('thelist').innerHTML;
function foo () {
  console.log(myList[0]);
};


b.addEventListener('click', foo);
>>>>>>> 62ec03945e2d6fb3ba83df6e0f2a23677a653d45
