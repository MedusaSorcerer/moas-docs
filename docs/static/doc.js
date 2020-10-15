window.onload = function () {
    let medusa = document.createElement('div');
    medusa.setAttribute('class', 'medusa');
    let base_url = typeof imgSign !== 'undefined' ? 'static/' : '../static/';
    medusa.innerHTML = '' +
        '<div><a onclick="goTop()" title="Top"><img class="pass" src="' + base_url + 'Top.png"></a></div>' +
        '<div><a href="https://www.github.com/MedusaSorcerer/" title="Github" target="_blank"><img class="pass" src="' + base_url + 'Github.png"></a></div>' +
        '<div><a href="https://juejin.im/user/2805609406139950" title="掘金" target="_blank"><img class="pass" src="' + base_url + 'Juejin.png"></a></div>';
    document.body.appendChild(medusa);
    for (let item of document.getElementsByTagName('img')) {
        if (item.classList.contains('pass') === false) {
            item.setAttribute('onclick', 'clickAction(this)');
        }
    }
}

function clickAction(img) {
    let medusa = document.createElement('div');
    medusa.setAttribute('id', 'imgBaseDiv');
    medusa.setAttribute('onclick', 'closeImg()');
    let image = document.createElement('img');
    image.setAttribute('src', img.src);
    medusa.appendChild(image);
    document.body.appendChild(medusa);
}

function closeImg() {
    document.getElementById('imgBaseDiv').remove();
}

function goTop() {
    let scrollToTop = setInterval(function () {
        let pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 20);
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 10);
}
