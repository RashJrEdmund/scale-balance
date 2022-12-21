
// submitBtn.addEventListener('click', () => {
//   if((inputVallues.value == "")&&(displayResults.innerHTML == "")){
//     alert('gran add Elements 1 and 2')
//   } else {
//     let arrVallues = weights.split(",")
//     console.log(`arrVallues = ${arrVallues}`)

//     let arrWeights = weights.split(",")
//     console.log(`arrWeights = ${arrWeights}`)
//   }
// })

const input1 = document.querySelector('#weights')
const weightsToChose = document.querySelector('#list-0f-weights')
const evaluateBtn = document.querySelector('#evaluate')
const displayResults = document.querySelector('#display')
let result

evaluateBtn.addEventListener('click', (e) => {
  console.log(input1.value)
  if (input1.value === '') {
    alert('Please input two weights to balance')
  } else if (weightsToChose.value === '') {
    alert('Please input optional weights to select from for scale balancing')
  } else {
    const elementoneArr = input1.value.split(',').map(Number)
    const elementtwoArr = weightsToChose.value.split(',').map(Number)
    console.log(elementoneArr)
    console.log(elementtwoArr)

    if (elementoneArr.length !== 2 || elementoneArr[0] === 0) {
      displayResults.innerHTML = (
        'Weight added is less or more than two integers. Only two comma seperated weights can be added'
      )
    } else {
    // the scale balancing is processed by calling the balanceScale function
      const result2 = balanceScale(elementoneArr, elementtwoArr)
      displayResults.innerHTML = result
      return result2
    }
  }
})

function balanceScale (elementone, elementtwo) {
  const diff = ((elementone[1] - elementone[0])**2)**(1/2)
  if (diff === 0) {
    result = 'scale is balanced'
    return result
  }

  for (let z = 0; z < elementtwo.length; z++) {
    if (elementtwo[z] === diff) {
      result = [elementtwo[z]]
      return result
    }
  }
  for (let i = 0; i < elementtwo.length; i++) {
    for (let j = 1; j < elementtwo.length; j++) {
      if (elementtwo[i] + elementtwo[j + 1] === diff) {
        result = [elementtwo[j + 1], elementtwo[i]]
      } else if ((elementtwo[i] + diff === elementtwo[j + 1])) {
        result = [elementtwo[j + 1], elementtwo[i]]

        return result
      } else {
        result = 'no number available to balance'
      }
    }
  }
}
