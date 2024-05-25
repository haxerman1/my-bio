window.onload = function() {
    var snowflakes = document.getElementById('snowflakes');
    setInterval(function() {
        var snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
        snowflake.style.opacity = Math.random();
        snowflakes.appendChild(snowflake);
        setTimeout(function() {
            snowflakes.removeChild(snowflake);
        }, 5000);
    }, 100);
};
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'DsY_kocbWaM',
        events: {
            'onReady': onPlayerReady,
        },
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'showinfo': 0,
            'rel': 0,
            'loop': 1,
            'playlist': 'DsY_kocbWaM'
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
    event.target.setVolume(50); // Set volume level to 50%
}

