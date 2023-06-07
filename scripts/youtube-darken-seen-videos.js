let recentlyClearedWatchedVideos = false;

function clearWatchedVideos() {
	if (!recentlyClearedWatchedVideos) {
		recentlyClearedWatchedVideos = true
		
		let progresses = document.querySelectorAll('#progress');
		progresses.forEach(progress => {
			let width = parseInt(progress.style.width);
			if (width > 10) {
				let videoParent = progress.closest('ytd-thumbnail.style-scope.ytd-rich-grid-media');
				
				if (videoParent) {
					videoParent.style.opacity = 1 - (((width/100)*.8)+.1)
				}
			}
		})
		
		setTimeout(function() {
			recentlyClearedWatchedVideos = false
		}, 500);
	}
}

clearWatchedVideos();

document.addEventListener("scroll", (event) => {
	clearWatchedVideos();
});

window.addEventListener("load", (event) => {
	console.log('load event fired')
	for (var i = -1; i <= 6; i++) {
		setTimeout(function() {
			clearWatchedVideos();
		}, Math.pow(2, i) * 1000);
	}
});
