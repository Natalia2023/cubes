const colors = [
    {
        label: "red",
        color: "#FF0000",
    },
    {
        label: "green",
        color: "#00FF00",
    },
    {
        label: "blue",
        color: "#0000FF",
    },
    {
        label: "yellow",
        color: "#FFFF00",
    },
];
const createMarcap = (colors) => {
    return colors.map((color) => {
const button = document.createElement("button");
button.type = 'button';
button.textContent = color.label;
button.style. backgroundColor = color.color;
button.classList.add('button'); // Додати клас "button
return button;
    });
};
const container = document.querySelector(".container");
container.append(...createMarcap(colors)); 
console.log("createMarcap", createMarcap(colors));