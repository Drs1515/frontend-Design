/*function popUp(winURL) {
	window.open(winURL,"popup","width=320,height=480");
}


window.onload = function () {
	if(!document.getElementsByTagName) return false;
	var links = document.getElementsByTagName("a");
	for (var i=0;i<links.length;i++) {
		if (links[i].getAttribute("class") == "popup") {
			links[i].onclick = function() {
				popUp(this.getAttribute("href"));
				return false;
			}
		}
	}
}*/

/*function insertParagraph(text) {
	var str = "<p>";
	str += text;
	str += "</p>";
	document.write(str);
}*/

/*window.onload = function() {
	var testdiv = document.getElementById("testdiv");
	// alert(testdiv.innerHTML);
	testdiv.innerHTML = "<p>I inserted <em>this</em> content</p>";
}*/

// window.onload = function() {
// 	var para = document.createElement("p");
// 	var info = " nodeName: ";
// 	info += para.nodeName;
// 	info += " nodeType: ";
// 	info += para.nodeType;
// 	alert(info);
// }

/*window.onload = function() {
	var para = document.createElement("p");
	var testdiv = document.getElementById("testdiv");
	testdiv.appendChild(para);
	var txt = document.createTextNode("Hello World!");
	para.appendChild(txt);
}*/

//不同顺序
/*window.onload = function() {
	var para = document.createElement("p");
	var testdiv = document.getElementById("testdiv");
	testdiv.appendChild(para);
	var txt = document.createTextNode("Hello World!");
	para.appendChild(txt);
}*/

window.onload = function() {
	var para = document.createElement("p");
	var txt1 = document.createTextNode("This is ");
	para.appendChild(txt1);
	var emphasis = document.createElement("em");
	var txt2 = document.createTextNode("my");
	emphasis.appendChild(txt2);
	para.appendChild(emphasis);
	var txt3 = document.createTextNode(" content.");
	para.appendChild(txt3);
	var testdiv = document.getElementById("testdiv");
	testdiv.appendChild(para);
}