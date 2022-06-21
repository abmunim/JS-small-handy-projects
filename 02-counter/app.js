// setting initial count
let count = 0

// selecting value and buttons
const countValue = document.querySelector('#value')
const btns = document.querySelectorAll('.btn') // queryselectorall returns nodelist and we can perform several array traversing techniques

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const style = e.currentTarget.classList
    if (style.contains('decrease')) {
      count--
    } else if (style.contains('increase')) {
      count++
    } else if (style.contains('reset')) {
      count = 0
    }
    if (count > 0) {
      countValue.style.color = 'green'
    }
    if (count < 0) {
      countValue.style.color = 'red'
    }
    if (count === 0) {
      countValue.style.color = 'black'
    }
    countValue.textContent = count
  })
})
