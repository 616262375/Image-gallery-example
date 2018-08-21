var image = document.querySelector('.image');
var btn = document.querySelector('button');
var small = document.querySelector('.smallImage');
var overlay = document.querySelector('.overlay');

for (i = 1; i < 6; i++) {
    var img = document.createElement('img');
    img.setAttribute('src','images/pic'+ i +'.jpg');
    small.appendChild(img);

    img.onclick = function(e) {
        var newSrc = e.target.getAttribute('src');
        changeDisplaySrc(newSrc);
    }
}

function changeDisplaySrc(newSrc) {
    image.setAttribute('src',newSrc);
}

btn.onclick = function() {
    var btnClass = btn.getAttribute('class');
    if (btn.textContent === 'Darken') {
        btn.setAttribute('class','Light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.4)';
    } else {
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}
