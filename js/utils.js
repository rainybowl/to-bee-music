function getJSON(url, callback) {
	var request = new XMLHttpRequest();
	request.open('GET', url, true);

	request.onload = function() {
	  if (request.status >= 200 && request.status < 400) {
	    // Success!
	    var data = JSON.parse(request.responseText);
	  	if(callback)
	  		callback(data);

	  } else {
	    // We reached our target server, but it returned an error
	    console.log('error!')
	  }
	};

	request.onerror = function() {
	  // There was a connection error of some sort
	};

	request.send();
}