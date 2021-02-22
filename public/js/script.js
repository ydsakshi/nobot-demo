const SpeechRecognition = window.SpeechRecognition;
const recognition = new SpeechRecognition();
const socket = io();

document.querySelector('button').addEventListener('click', () => {
    recognition.start();
});

recognition.addEventListener('result',(e) => {
    let last = e.results.length - 1;
    let text = e.results[last][0].transcript;
    
    console.log('Confidence: ' + e.results[0][0].confidence);

    socket.emit('chat message',text);
});