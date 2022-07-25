const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")

const logValue = function (e) {
  console.log(e.target.value)
}

console.dir(memoInput)

addButton.onclick = logValue
