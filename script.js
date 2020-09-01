let buttons = document.querySelectorAll('button')
buttons.forEach(button=> {
  button.addEventListener('click', ()=>{
    alert("This feature isn't done yet!")
  })
})
let boxes = document.querySelectorAll('.card')
boxes.forEach(box=> {
  box.addEventListener('click', ()=> {
    window.open(`https://www.google.com.sg/maps/place/${box.innerText}`)
  })
})