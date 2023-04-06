function update() {
    is = Array.from(document.getElementsByTagName('input')).map(e=>e.checked);
    cs = Array.from(document.getElementById('content').children);
    cs.forEach(e => {
        e.hidden = !is[Number.parseInt(e.dataset["content"])];
    });
}

function init() {
    is = Array.from(document.getElementsByTagName('input'));
    is[0].checked = true;
    is[1].checked = true;
    is[2].checked = true;
    is[3].checked = false;
    update();
}
