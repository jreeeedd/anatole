document.addEventListener("DOMContentLoaded", function () {
  const profilePicture = document.querySelector(".title img");
  const body = document.querySelector("body");
  let keypressed = "";
  let secretCode = "drunk";

  function secretCodeMatch(e){
    return keypressed.includes(secretCode) && e.key === "Enter";
  }

  function setAudio(){
    const audio = document.createElement("audio");
    const source = document.createElement("source");
    source.src = "/audio/chuli-leto.mp3";
    audio.appendChild(source);
    body.appendChild(audio);
    audio.currentTime = 107;
    audio.play();
  }

  function flashLights(){
    setInterval(function () {
      if (document.documentElement.getAttribute("data-theme") === "light") {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }, 300);
  }

  function changeProfilePicture(){
    profilePicture.src = "/images/drunk.png";
  }

  function getSecretCode(e){
    keypressed += e.key;

    if (secretCodeMatch(e)) {
      changeProfilePicture();
      setAudio();
      flashLights();
    }
  }

  window.addEventListener("keyup", getSecretCode);
});
