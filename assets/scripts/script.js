const inputVallues = document.querySelector(".weights");
const displayResults = document.querySelector(".display-results")
const submitBtn = document.querySelector(".submit-btn")

console.log(`this is inputVallues: ${inputVallues.value}\n`)
console.log(`this is displayResults: ${displayResults.value}\n`)

submitBtn.addEventListener('click', () => {
  if((inputVallues.value == "")&&(displayResults.innerHTML == "")){
    alert('gran add Elements 1 and 2')
  } else {
    let arrVallues = weights.split(",")
    console.log(`arrVallues = ${arrVallues}`)

    let arrWeights = weights.split(",")
    console.log(`arrWeights = ${arrWeights}`)
  }
})