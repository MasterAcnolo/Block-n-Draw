import {create, getRandomColor} from "../canvas.js";

function square(type, id =`square-${Math.random()}`, parent = "container", width = 200, height = width, positionX, positionY, color = getRandomColor()){
    const square = create(type,id, parent, width,width, positionX, positionY, color)
    return square
}

export {square};