document.querySelector('#sendOrder').addEventListener('click', sendOrder)
document.querySelector('#clearOrder').addEventListener('click', clearOrder)

let add = document.querySelectorAll(".addToOrder")

let currentOrder = []

Array.from(add).forEach(function (element) {
  element.addEventListener('click', addToOrder)
})

function addToOrder(event) {
  let drink = event.target.parentNode.querySelector('input[name="drink"]').value
  let temp = event.target.parentNode.querySelector(`input[name="${drink}-temp"]:checked`).value
  let size = event.target.parentNode.querySelector(`input[name="${drink}-size"]:checked`).value
  let sugar = event.target.parentNode.querySelector(`input[name="${drink}-sugar"]:checked`).value
  let milk = event.target.parentNode.querySelector(`input[name="${drink}-milk"]:checked`).value
  let other = event.target.parentNode.querySelector(`input[name="${drink}-other"]:checked`).value

  let item = {
    drink: drink,
    temp: temp,
    size: size,
    sugar: sugar,
    milk: milk,
    other: other,
  }
  currentOrder.push(item)
      
  const li = document.createElement('li')
  li.innerText = drink
  document.querySelector('#current-order').appendChild(li)
}

function sendOrder() {
  let customerName = document.querySelector('#customerName').value
  console.log(customerName)

  fetch('order', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'order': currentOrder,
      'customerName': customerName
    })
  }).then(function (response) {
    window.location.reload()
  })
}

function clearOrder(){
  currentOrder = []
  document.querySelector('ul').innerHTML = ''
}

