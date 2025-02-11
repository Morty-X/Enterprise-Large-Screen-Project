(function () {
    var animationImg = document.querySelector('#iframes4');
    function animate(i) {
        requestAnimationFrame(function () {
            var index = '智慧企业_' + `0000${i++}`.slice(-5)
            animationImg.src = `assets/images/iframes4/${index}.png`
            var nextIndex = i >= 298 ? 50 : i++;
            animate(nextIndex)
        })
    }
    animate(0)
})();
