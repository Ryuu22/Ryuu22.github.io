
const grid = document.getElementById("content-grid");
const buttonContainer = document.getElementById("button-container");
const tags = new Map([
           [ "All", {"name" : "All", "color" : "#000000" }],
           [ "FullStack", {"name" : "Full Stack", "color" : "#98bb26" }],
           [ "Backend", {"name" : "Back End", "color" : "#cc241d" }],
           [ "GameDev", {"name" : "Game Development", "color" : "#458588" }]
        ]);
let cachedData = [];

function createButtonElement(key,tag) {
    let buttonElement = document.createElement("button");
    buttonElement.className = "ryuu-button";
    buttonElement.innerHTML = tag.name;
    //buttonElement.style.backgroundColor = tag.color;
    buttonElement.onclick = function () {
        sortByTag(key);
    }
    return buttonElement;
}

function appendButtonsToContainer() {
    buttonContainer.innerHTML = "";
    for (const [key, value] of tags.entries()) {
        buttonContainer.appendChild(createButtonElement(key, value));
    }
    
}


function loadData(url) {
    // load data from url
    let data = null;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send(null);
    if (xhr.status == 200) {
        data = xhr.responseText;
        cacheData(JSON.parse(data).data);
        appendDataToGrid(JSON.parse(data).data);
    }
}

function cacheData(data) {
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        cachedData.push(element);
    }
}

function generateCardElement(data) {
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

    let tagContainer = generateTagBadges(data.tags);
    cardBodyElement.appendChild(tagContainer);

    cardElement.appendChild(cardBodyElement);
    return cardElement; 
}

function generateTagBadges(tagsToGenerate) {
    let tagContainer = document.createElement("div");
    tagContainer.className = "tag-container";
    for (let i = 0; i < tagsToGenerate.length; i++) {
        const element = tagsToGenerate[i];
        let tagElement = document.createElement("span");
        tagElement.className = "tag";
        tagElement.innerHTML = tags.get(element).name;
        tagElement.style.backgroundColor = tags.get(element).color;
        tagContainer.appendChild(tagElement);
    }
    return tagContainer;
}

function appendDataToGrid(data) {
    for (let i = 0; i < data.length; i++) {
        grid.appendChild(generateCardElement(data[i]));
    }
}

function main() {
    // load data.json
    grid.innerHTML = "";
    appendButtonsToContainer();
    loadData("https://raw.githubusercontent.com/Ryuu22/Ryuu22.github.io/master/data.json");

}

function sortByTag(tagname) {
    if (tagname == "All") {
        appendDataToGrid(cachedData);
        return;
    }
    // sort data by tag
    grid.innerHTML = "";
    let filteredData = cachedData.filter(function (el) {
        return el.tags.includes(tagname);
    });
    appendDataToGrid(filteredData);
}

main();
