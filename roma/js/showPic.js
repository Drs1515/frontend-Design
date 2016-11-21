function showPic(whichpic) {
	if (!document.getElementById("placeholder")) return false;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if (placeholder.nodeName != "IMG") return false;
	placeholder.setAttribute("src", source);
	if (document.getElementById("description")) {
		// if (whichpic.getAttribute("title")) {
		// 	var text = whichpic.getAttribute("title");
		// } else {
		// 	var text = "";
		// }
		//三元操作符
		var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
		var description = document.getElementById("description");
		// alert (description.nodeValue);
		// alert(description.childNodes[0].nodeValue);
		// alert(description.firstChild.nodeValue);
		description.firstChild.nodeValue = text;
	}
	return true;
}

/*
function countBodyChildren() {
	var body_element = document.getElementsByTagName("body")[0];
		alert (body_element.childNodes.length);
	// alert(body_element.nodeType);
}
//浏览器刷新时显示body元素的子元素的总个数。
window.onload = countBodyChildren;
*/

function prepareGallery() {
	if (!document.getElementsByTagName) {
		return false;
	}
	if (!document.getElementById) {
		return false;
	}
	if (!document.getElementById("imagegallery")) {
		return false;
	}
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function() {
				// return !showPic(this);
				return showPic(this) ? false : true;
			}
			// links[i].onkeypress = function() {
			// 	// return !showPic(this);
			// 	return showPic(this) ? false : true;
			// }
			// links[i].onkeypress = links[i].onclick;
	}
}

//页面加载完毕时执行的函数
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}


/*<img id="placeholder" src="images/placeholder.gif" alt="my image gallery" />
<p id="description">Choose an image.</p>*/
function preparePlaceholder() {
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("imagegallery")) return false;
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","images/placeholder.gif");
	placeholder.setAttribute("alt","my image gallery");
	var description = document.createElement("p");
	description.setAttribute("id","description");
	var desctext = document.createTextNode("Choose a image");
	description.appendChild(desctext);
	// document.getElementsByTagName("body")[0].appendChild(placeholder);
	// document.getElementsByTagName("body")[0].appendChild(description);
	// document.body.appendChild(placeholder);
	// document.body.appendChild(description);
	var gallery = document.getElementById("imagegallery");
	// gallery.parentNode.insertBefore(placeholder,gallery);
	// gallery.parentNode.insertBefore(description,gallery);
	insertAfter(placeholder,gallery);
	insertAfter(description,placeholder);
}

//因为DOM没有insertAfter方法，可以利用已有的DOM方法和属性编写insertAfter函数
function insertAfter(newElement,targetElement) {
	var parent = targetElement.parentNode;
	if (parent.lastNode == targetElement) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);