var requestFilter = {
	urls: [
		"http://sh.st/*",
		"https://sh.st/*",
		"http://clkmein.com/*",
		"http://viid.me/*",
		"http://xiw34.com/*",
	]
};

chrome.webRequest.onBeforeSendHeaders.addListener(function(details) {
	var headers = details.requestHeaders;
        headers = headers.filter(function(x) { return x.name !== 'User-Agent';});
	return {requestHeaders: headers};
}, requestFilter, ['requestHeaders','blocking']);
