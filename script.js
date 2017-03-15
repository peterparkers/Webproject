document.getElementById("addButton").addEventListener("click", addFunction);
function addFunction() {
	var x = document.getElementById("xValue").value;
    var y = document.getElementById("yValue").value;
	var z = +x+ +y;
    document.getElementById("answer").innerHTML = z;
}
function setRed(){
	var text = document.getElementById("demo");
	demo.style.color = "red";
}
function setBlue(){
	var text = document.getElementById("demo");
	demo.style.color = "blue";
}