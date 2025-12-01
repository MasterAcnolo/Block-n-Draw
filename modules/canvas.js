const canvasContainer = document.getElementById("canvasContainer")

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function create(type, id, parent, width, height, positionX, positionY,color = getRandomColor()){

    // Créer un canvas, pour mettre des éléments dedans. Prend en paramètres le parent cible, la hauteur / longueur du parent
    // ainsi que l'ID de l'object. Renvoie l'objet prêt à être appendChild, ainsi que l'id du parent cible.

    let containerParent = document.getElementById(parent);

    // Si pas existant, créer le parent
    if (!containerParent){
        containerParent = document.createElement("div");
        containerParent.id = parent;
        canvasContainer.appendChild(containerParent);
    }

    // Créer le canvasObject
    const canvasObject = document.createElement("div");
    canvasObject.id = id;

    canvasObject.style.position = "absolute";
    canvasObject.style.left = `${positionX}px`;
    canvasObject.style.top = `${positionY}px`;

    canvasObject.style.width = `${width}px`;
    canvasObject.style.height = `${height}px`;
    canvasObject.style.backgroundColor = `${color}`;

    if(type == "circle"){ canvasObject.style.borderRadius = "50%"; }

    // Ajouter le canvas dans le parent (même si le parent n’est pas encore dans le DOM, c’est ok)
    containerParent.appendChild(canvasObject);

    return [canvasObject, containerParent];
};

function createReportList(wrapperId){
    // Prend en paramètres l'ID du conteneur voulu
    // Créer une UL 
    // Renvoie l'id de la liste

    let list = document.getElementById(wrapperId);

    if (!list) {
        list = document.createElement("ul");
        list.id = wrapperId;
        document.body.appendChild(list);
    }

    return list.id;
};  

export {createReportList, create, getRandomColor};