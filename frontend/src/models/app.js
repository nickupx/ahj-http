console.log('works')

const widget = document.querySelector('#subscribe')
const form = widget.querySelector('#subscribe-form')
const nameInput = widget.querySelector('#name')
const phoneInput = widget.querySelector('#phone')

form.addEventListener('submit', (evt) => {
  // evt.preventDefault()
  console.log('submit')
})