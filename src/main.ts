import './style.css'

/* grab elements from html file */

let appElement = document.querySelector("#app") as HTMLDivElement
console.log(appElement)

let appElement2 = document.getElementById("app") as HTMLDivElement

let appElement3 = document.getElementsByTagName("div")[0] as HTMLDivElement

// create elements

let name = "John"
let fruits = ["alma", "narancs", "barack"]
let newLines = ""

for(let i = 0; i < fruits.length; i++) {
 newLines += `<p>${fruits[i]}</p>`
}


appElement2.innerHTML = `
<div>
  <p id = "click">Hello world</p>
  ${fruits.map((e) => `<p>${e}</p>`).join("")}
  <p>Hello ${name}!</p>
</div>`

/* appElement2.insertAdjacentHTML("beforeend", `      //bonyolult
<div>
  <p>Hello world</p>
  <p>Hello ${name}!</p>
</div>`) */

let newDiv = document.createElement("div");
let newInput = document.createElement("input");
newInput.placeholder = "Click here"

appElement.appendChild(newDiv)
newDiv.appendChild(newInput)


//event adding 
newInput.addEventListener("click", () => alert("Error"));

(document.getElementById("click") as HTMLParagraphElement).addEventListener("click", () => alert("Error"))


//delete elements
/* appElement.innerHTML = ""; */
/* appElement.removeChild(newDiv) */