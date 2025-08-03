const playButton = document.getElementById('playButton');
const audio = new Audio('TWICE _The Best Thing I Ever Did(올해 제일 잘한 일)_ M_V.mp3');
let lyricTimeouts = [];
let lyricDelays = [19000, 25000, 31000, 37000, 43000, 49000, 55000]; 


function startLyricsFrom(currentTime) {
  resetLyrics();
  
  lyricDelays.forEach((delay, index) => {
    if (currentTime * 1000 <= delay) {
      const remainingTime = delay - currentTime * 1000;
      
      const timeoutId = setTimeout(() => {
        document.querySelector(`#lyric${index + 1}`).classList.add('show');
      }, remainingTime);
      
      lyricTimeouts.push(timeoutId);
    } else {
     
      document.querySelector(`#lyric${index + 1}`).classList.add('show');
    }
  });
}

playButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playButton.textContent = "Pause Music";
    startLyricsFrom(audio.currentTime); 
    
  } else {
    audio.pause();
    playButton.textContent = "One in a Million";
    resetLyrics();
  }
});

function resetLyrics() {
  lyricTimeouts.forEach(timeout => clearTimeout(timeout));
  lyricTimeouts = [];
}