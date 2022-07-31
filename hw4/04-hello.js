// Add your code here
let container = document.createElement("div");
container.class = "card";
container.style.width = "50vw";
document.body.append(container);

let image = document.createElement("img");
image.src = "../images/rfilgas.png";
image.width = "200";
image.height = "200";
image.alt = "headshot of Ryan Filgas";
image.style.display = "block";
image.style.margin = "0 auto";
image.style.width = "auto";
image.style.borderRadius = "100px";
container.appendChild(image);

let intro_par = document.createElement("section");
let firstline = document.createElement("span");
firstline.class = "intro";
sentence = "Hello, I'm Ryan Filgas, a computer science student at Portland State University in persuit of my masters degree. "
firstline.style.fontWeight = "bold";
firstline.textContent = sentence

intro_par.appendChild(firstline)


let nextline = document.createElement("span");
nextline.class = "intro";
nextline.textContent = `I enjoy friends, photography, and being outdoors.`;
intro_par.style.textAlign = "center";
intro_par.style.marginLeft = "auto";
intro_par.style.marginRight = "auto";
intro_par.style.maxWidth = "650px";
intro_par.appendChild(nextline)
container.appendChild(intro_par);
