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
