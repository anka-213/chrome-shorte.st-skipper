var requestFilter = {
	urls: [
		"http://sh.st/*",
		"https://sh.st/*",
		"http://clkmein.com/*",
		"http://viid.me/*",
		"http://xiw34.com/*",
    "http://corneey.com/*",
    "http://gestyy.com/*",
    "http://cllkme.com/*",
    "http://festyy.com/*",
    "http://destyy.com/*",
    "http://ceesty.com/*",
	]
};

chrome.webRequest.onBeforeSendHeaders.addListener(function(details) {
	var headers = details.requestHeaders;
        headers = headers.filter(function(x) { return x.name !== 'User-Agent';});
	return {requestHeaders: headers};
}, requestFilter, ['requestHeaders','blocking']);
