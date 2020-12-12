console.log('works')

const widget = document.querySelector('#subscribe')
const form = widget.querySelector('#subscribe-form')
const nameInput = widget.querySelector('#name')
const phoneInput = widget.querySelector('#phone')

form.addEventListener('submit', (evt) => {
  evt.preventDefault()

  const params = new URLSearchParams()
  Array.from(form.elements)
  .filter(({ name }) => name)
  .forEach(({ name,value }) => params.append(name,value))
    
  const url = 'http://localhost:7070'
  
  const xhr = new XMLHttpRequest()
  xhr.open('POST', url)

  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  xhr.addEventListener('readystatechange', (evt) => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr.response)
      }
    }
  })

  xhr.send(params)
})