window.onload = function() {

    // skew and spacing
    let skew = document.getElementById('skew');
    let spacing = document.getElementById('spacing');
    let dim = document.getElementById('header_content');

    window.addEventListener('scroll', function() {
        // vw = px * ratio, px = vw / ratio
        let ratio = 100 / Math.max(document.documentElement.clientWidth, 1);
        let scroll = window.scrollY;

        // skew
        let value_skew = Math.min(-10 + scroll/60, 0);

        // spacing
        let dimY = dim.getBoundingClientRect().bottom;
        let value_spacing = Math.min((scroll - dimY) / 10 * ratio, 6); // in vw
        
        // update css
        spacing.style.height = value_spacing + "vw";
        skew.style.transform = "skewY(" + value_skew + "deg)";
    });

};
