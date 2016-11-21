function getNewContent() {
	var request = getHTTPObject();
	if (request) {
		request.open("GET","example.txt",true );
		request.onreadystatechange = function() {
			if (request.readyState == 4) {
				var para = document.createElement("p");
				var txt = document.createTextNode(request.responseText);
				para.appendChid(txt);
				document.getElementById('new').appendChid(para);
			}
		};
		request.send(null);
	} else {
		alert('Sorry, your brower does\'t support XMLHttpRequest');
	}
}

addLoadEvent(getNewContent);