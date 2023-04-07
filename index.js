var content;

function update() {
    is = Array.from(document.getElementsByTagName('input')).map(c => c.checked);
    document.getElementById("content").replaceChildren(...content.filter(e => is[Number.parseInt(e.dataset["content"])]));
}

function init() {
    content = Array.from(document.getElementById("content").children);
    // check the correct types
    is = Array.from(document.getElementsByTagName('input'));
    is[0].checked = true;
    is[1].checked = true;
    is[2].checked = true;
    is[3].checked = false;
    update();
}
