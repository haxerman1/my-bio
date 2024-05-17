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
