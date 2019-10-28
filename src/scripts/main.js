import data from "./data.js"
import taco from "./dom.js"

console.log(data)

console.log("Testing...")

data.getNumberTrivia()
.then(response => taco.printToDom(response))
