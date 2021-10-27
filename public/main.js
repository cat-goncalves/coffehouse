var complete = document.getElementsByClassName("complete");
var trash = document.getElementsByClassName("fa-trash");


Array.from(complete).forEach(function(element) {
      element.addEventListener('click', function(){
        var utterThis = new SpeechSynthesisUtterance('Hello');
        console.log(speechSynthesis.getVoices(), speechSynthesis.volume()) //.getVoices is returning an empty array
        utterThis.voice = speechSynthesis.getVoices()[1]  // Default voice is not working!
        window.speechSynthesis.speak(utterThis)
      
        const id = this.parentNode.querySelector('.id').innerText
        const barista = document.querySelector('.barista').innerText
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
          console.log(utterThis.voice, window.speechSynthesis.speaking, window.speechSynthesis.pending, window.speechSynthesis.paused)
          utterThis.onend = function(event) {
            window.location.href = 'http://localhost:8080/profile'
          }
          utterThis.onerror = function(error){
            console.log(error)
          }
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
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