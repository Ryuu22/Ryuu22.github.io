
const grid = document.getElementById("content-grid");

function loadData(url) {
    // load data from url
    let data = null;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send(null);
    if (xhr.status == 200) {
        data = xhr.responseText;
        appendDataToGrid(JSON.parse(data).data);
    }
}

function generateCardElement(data) {
    // create html template
    let cardElement = document.createElement("div");
    cardElement.className = "card";

    let cardLinkElement = document.createElement("a");
    cardLinkElement.href = data.link;

    let cardImageElement = document.createElement("div");
    cardImageElement.className = "card-image";
    cardImageElement.style.backgroundImage = "url(" + data.image + ")";
    cardLinkElement.appendChild(cardImageElement);
    cardElement.appendChild(cardLinkElement);

    let cardBodyElement = document.createElement("div");
    cardBodyElement.className = "text-body";

    let cardTitleElement = document.createElement("h4");
    cardTitleElement.innerHTML = data.title;
    cardBodyElement.appendChild(cardTitleElement);

    let cardTextElement = document.createElement("p");
    cardTextElement.innerHTML = data.description;
    cardBodyElement.appendChild(cardTextElement);

    cardElement.appendChild(cardBodyElement);
    return cardElement; 
}

function appendDataToGrid(data) {
    for (let i = 0; i < data.length; i++) {
        grid.appendChild(generateCardElement(data[i]));
    }
}

function main() {
    // load data.json
    grid.innerHTML = "";
    loadData("https://raw.githubusercontent.com/Ryuu22/Ryuu22.github.io/master/data.json");

}

main();
