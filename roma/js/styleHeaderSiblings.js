// 找出每个h1元素后面的元素
function styleElementSiblings(tag,theclass) {
	if (!document.getElementsByTagName) return false;
	// var elems = document.getElementsByTagName("h1");
	var elems = document.getElementsByTagName(tag);
	var elem;
	for (var i=0; i<elems.length; i++) {
		elem = getNextElement(elems[i].nextSibling);
		// elem.style.fontWeight = "bold";
		// elem.style.fontSize = "1.2em";
		addClass(elem,"intro");
		addClass(elem,theclass);
	}
}
//找出下一个元素节点
function getNextElement(node) {
	if(node.nodeType == 1) {
		return node;
	}
	if(node.nextSibling) {
		return getNextElement(node.nextSibling);
	}
	return null;
}
//设置新的class属性值或把新的class设置值追加到className属性上去
function addClass(element,value) {
	if (!element.className) {
		element.className = value;
	} else {
		newClassName = element.className;
		newClassName+= " ";
		newClassName+= value;
		element.className = newClassName;
	}
}

addLoadEvent(function() {
	styleElementSiblings("h1","intro");
});