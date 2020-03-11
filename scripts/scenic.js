window.onload = function(){
    let skew = document.getElementById('skew');
    let current = -10;
    window.addEventListener('scroll', function(){
        let value = Math.min(-10 + window.scrollY/60, 0);
        console.log(value);
        skew.style.transform = "skewY(" + value + "deg)";
    });
};


