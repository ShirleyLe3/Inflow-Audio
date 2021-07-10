let speech = new SpeechSynthesisUtterance();

// Talk
document.querySelector("#talk").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
  });

// Volume
document.querySelector("#rate").addEventListener("input", () => {
    const rate = document.querySelector("#rate").value;
    speech.rate = rate;
    document.querySelector("#rate-label").innerHTML = rate;
  });


// Rate
document.querySelector("#volume").addEventListener("input", () => {
    const volume = document.querySelector("#volume").value;
    speech.volume = volume;
    document.querySelector("#volume-label").innerHTML = volume;
  });


// Pitch
document.querySelector("#pitch").addEventListener("input", () => {
    const pitch = document.querySelector("#pitch").value;
    speech.pitch = pitch;
    document.querySelector("#pitch-label").innerHTML = pitch;
  });


  
// Voice Start
let voices = []; 

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  // Set the Voice Select List. (Set the Index as the value
  let voiceSelect = document.querySelector("#voices");
  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

// Voice
document.querySelector("#voices").addEventListener("change", () => {
    speech.voice = voices[document.querySelector("#voices").value];
  });
  var voicelist = responsiveVoice.getVoices();


// Controls  
document.querySelector("#start").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
  });
document.querySelector("#pause").addEventListener("click", () => {
    window.speechSynthesis.pause();
  });  
document.querySelector("#resume").addEventListener("click", () => {
    window.speechSynthesis.resume();
  });
  document.querySelector("#cancel").addEventListener("click", () => {
    window.speechSynthesis.cancel();
  });

