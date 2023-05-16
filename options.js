document.addEventListener('DOMContentLoaded', function () {
	chrome.commands.getAll(function (commands) {
		var shortcutInput = document.getElementById('shortcut');
		var saveButton = document.getElementById('save');

		// Set the current shortcut in the input field
		var currentShortcut = commands.find(function (command) {
			return command.name === 'replace-url';
		}).shortcut;
		shortcutInput.value = currentShortcut;

		// Save the new shortcut when the Save button is clicked
		saveButton.addEventListener('click', function () {
			var newShortcut = shortcutInput.value;
			chrome.commands.update({
				name: 'replace-url',
				shortcut: newShortcut,
			});
		});
	});
});
