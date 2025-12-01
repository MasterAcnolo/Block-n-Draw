import {create} from "../canvas.js";

function rectangle(type, id =`rectangle-${Math.random()}`, parent = "container", width = 200, height = width, positionX, positionY, color = getRandomColor()){
    const rectangle = create(type, id, parent, width, height, positionX, positionY, color)
    return rectangle
}


export {rectangle};