chrome.browserAction.onClicked.addListener(function (tab) {
	var url = tab.url.replace('shorts', 'watch');
	chrome.tabs.update(tab.id, { url: url });
});

chrome.commands.onCommand.addListener(function (command) {
	if (command === 'replace-url') {
		chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
			var tab = tabs[0];
			var url = tab.url.replace('shorts', 'watch');
			chrome.tabs.update(tab.id, { url: url });
		});
	}
});
