var list = document.getElementById("thelist");

var add = function(list) {
    var li = document.createElement("li");
    li.appendChild("I am appending a child!");
};

b.addEventListener('click', add);
