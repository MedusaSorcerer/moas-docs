let initial;
let scrollTop;

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
    let body = document.getElementsByTagName('body')[0];
    initial = body.innerHTML;
    scrollTop = document.documentElement.scrollTop;
    body.innerHTML = '<img id="M-img" onclick="closeImg()" style="' +
        '-webkit-user-select: none;' +
        'margin: auto;' +
        'display: flex;' +
        'justify-content: center;' +
        'align-items: center;' +
        'vertical-align: middle;' +
        'border: double;' +
        'border-color: red;' +
        'border-width: 8px;' +
        '" src="' + img.src + '">';
}

function closeImg() {
    document.getElementsByTagName('body')[0].innerHTML = initial;
    document.documentElement.scrollTop = scrollTop;
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
