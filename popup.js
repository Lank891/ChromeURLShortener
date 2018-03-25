function copyTextToClipboard(text) {
    var copyFrom = $('<textarea/>');
    copyFrom.text(text);
    $('body').append(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    copyFrom.remove();
}
	
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('przycisk');
    link.addEventListener('click', function() {
		chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
			var fullUrl = 'http://tinyurl.com/api-create.php?url=' + tabs[0].url;
			//console.log(fullUrl);
			$.get(fullUrl, function(shorturl){
				console.log(shorturl);
				copyTextToClipboard(shorturl);
			});	
		});
	});
});
