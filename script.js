const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'fr-FR';

let transcription = '';

recognition.onresult = (event) => {
  const results = event.results;
  let interimTranscription = '';

  for (let i = event.resultIndex; i < results.length; i++) {
    const transcript = results[i][0].transcript;
    if (results[i].isFinal) {
      transcription += transcript + ' ';
    } else {
      interimTranscription += transcript;
    }
  }

  document.getElementById('transcription').innerHTML = transcription + interimTranscription;
};

recognition.onend = () => {
  recognition.start();
};

recognition.start();