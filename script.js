var counter = 0;

slider()

function slider () {
    var imgslider = document.getElementsByClassName('heroimg');
    for (var i = 0; i < imgslider.length; i++) {
        imgslider[i].style.display = 'none'
    }

    counter++;

    if (counter > imgslider.length) {
        counter = 1;
    }

    imgslider[counter -1].style.display = 'block';
    setTimeout(slider, 4000)
}