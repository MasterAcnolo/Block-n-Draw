function getPerimeter(type, length, height = 0) {
    if (type === "square") {
        return 4 * length;
    } else if (type === "rectangle") {
        return 2 * (length + height);
    } else if (type === "circle") {
        return Math.round(2 * Math.PI * length);
    } else {
        return 0;
    }
}

export { getPerimeter };
