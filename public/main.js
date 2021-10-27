var complete = document.getElementsByClassName("bi-check2-circle");
var trash = document.getElementsByClassName("bi bi-trash");



Array.from(complete).forEach(function(element) {
      element.addEventListener('click', function(event){    
        const id = element.id
        const barista = document.querySelector('.barista').innerText
        const customerName = document.getElementById('customerName_' + id).innerText
        window.speechSynthesis.speak(new SpeechSynthesisUtterance(`Order ready for ${customerName}`))

        fetch('order', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'id': id,
            'barista': barista
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('profile', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});

// https://blog.teamtreehouse.com/getting-started-speech-synthesis-api