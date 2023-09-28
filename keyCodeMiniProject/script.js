const insertItem = document.querySelector("#insert");

function showKey(e) {
    insertItem.innerHTML = " ";
    console.log(e);

    const keyObjects = {
        "Key": e.key === " " ? "Space" : e.key,
        "Key Code": e.keyCode,
        "Code": e.code
    };

    for (let key in keyObjects) {
        const div = document.createElement("div");
        div.className = "key";
        const strong = document.createElement("strong");
        const keyText = document.createTextNode(key);
        const valueText = document.createTextNode(keyObjects[key]);

        strong.appendChild(keyText);
        div.appendChild(valueText);
        div.appendChild(strong);
        insertItem.appendChild(div);
    }
};

window.addEventListener("keydown", showKey);