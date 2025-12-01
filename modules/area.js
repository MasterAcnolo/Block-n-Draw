function getArea(type, length, height = 0){
     if(type === "square"){
        return length ** 2
    } else if(type === "rectangle"){
        return length * height
    } else if(type === "circle"){
        return Math.round(Math.PI * (length * length));
    } else{
        return 0
    }
}

export {getArea}