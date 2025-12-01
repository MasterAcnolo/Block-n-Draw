import {createReportList} from "./modules/canvas.js";
import {square} from "./modules/shapes/square.js";
import {rectangle} from "./modules/shapes/rectangle.js";
import {circle} from "./modules/shapes/circle.js";

import { getArea } from "./modules/area.js";
import { getPerimeter} from "./modules/perimeter.js";

const listID = createReportList("list");
const listElement = document.getElementById(listID);
const form = document.getElementById("formes");
const DataDiv = document.getElementById("data-list-ul");

const resetButton = document.getElementById("reset");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // récupère les valeurs
    const name = document.getElementById("name").value;
    const type = document.getElementById("type").value;
    const parentId = document.getElementById("parent").value || "canvasContainer";
    let parentEl = document.getElementById(parentId);
    const length = Number(document.getElementById("length").value);
    const height = Number(document.getElementById("height").value) || length;
    const color = document.getElementById("color").value;
    const posX = Number(document.getElementById("posX").value);
    const posY = Number(document.getElementById("posY").value);

    const id = name;

    if (!parentEl) {
        parentEl = document.createElement("div");
        parentEl.id = parentId;
        document.getElementById("canvasContainer").appendChild(parentEl);
    }

    let newShape;
    if(type === "square"){
        newShape = square("square", id, parentId, length, length, posX, posY, color);
    } else if(type === "rectangle"){
        newShape = rectangle("rectangle", id, parentId, length, height, posX, posY, color);
    } else if(type === "circle"){
        newShape = circle("circle", id, parentId, length, height, posX, posY, color);
    }
    const li = document.createElement("li");

    parentEl.appendChild(newShape[0]);
    listElement.appendChild(parentEl);

    li.textContent = ` ${name} - Parent: ${parentId} | ${length}px x ${height}px \n Position: ${posX} / ${posY} | ${color} | Area: ${getArea(type, length, height)}cm² | Périmètre: ${getPerimeter(type, length, height)}cm `
    DataDiv.appendChild(li)
});

resetButton.addEventListener("click", function(){
    listElement.innerHTML = "";
    DataDiv.innerHTML = "";
});

document.getElementById("capture").addEventListener("click", () => {
    const target = document.getElementById("canvasContainer");

    html2canvas(target).then(canvas => {
        const imgURL = canvas.toDataURL("image/png");

        // Téléchargement auto
        const link = document.createElement("a");
        link.href = imgURL;
        link.download = "dessin.png";
        link.click();
    });
});
