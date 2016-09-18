var requestFilter = {
	urls: [
		"http://sh.st/*"
	]
};

chrome.webRequest.onBeforeSendHeaders.addListener(function(details) {
	var headers = details.requestHeaders;
        headers = headers.filter(function(x) { return x.name !== 'User-Agent';});
	return {requestHeaders: headers};
}, requestFilter, ['requestHeaders','blocking']);
