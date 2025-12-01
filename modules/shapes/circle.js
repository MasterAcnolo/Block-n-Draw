import {create, getRandomColor} from "../canvas.js";

function circle(type, id =`circle-${Math.random()}`, parent = "container", width = 200, height = width, positionX, positionY, color = getRandomColor()){
    const circle = create(type,id, parent, width,width, positionX, positionY, color)
    return circle
}

export {circle};