const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")

const memomo = function () {
  console.dir(memoInput)
  console.log(memoInput)
}

addButton.onclick = memomo
