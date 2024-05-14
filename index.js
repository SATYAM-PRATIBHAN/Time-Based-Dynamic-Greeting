let container = document.querySelector(".container");
let t = new Date().getHours();

let greetings = t >= 5 && t < 12 ? "Good Morning" : t >= 12 && t < 18 ? "Good Afternoon" : "Good Evening";
container.innerHTML = `<h1>${greetings}</h1>`;