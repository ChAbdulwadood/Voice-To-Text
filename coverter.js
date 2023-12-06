let recognition = new webkitSpeechRecognition();
let isRecording = false;
let transcription = '';

document.getElementById('start-recording').addEventListener('click', () => {
    if (!isRecording) {
        recognition.start();
        isRecording = true;
        document.getElementById('start-recording').textContent = 'Start';
    }
});

document.getElementById('stop-recording').addEventListener('click', () => {
    if (isRecording) {
        recognition.stop();
        isRecording = false;
        document.getElementById('start-recording').textContent = 'Start';
    }
});

recognition.onresult = (event) => {
    let result = event.results[0][0].transcript;
    transcription += result;
    document.getElementById('transcription').textContent = transcription;
};
// function copy(){
//     transcription.select();
//     document.execCommand("copy");
// }