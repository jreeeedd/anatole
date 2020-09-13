document.addEventListener("DOMContentLoaded", function () {
  const profilePicture = document.querySelector(".title img");
  const body = document.querySelector("body");
  let keypressed = "";
  let secretCode = "drunk";

  window.addEventListener("click", function (e) {
    keypressed += e.key;
    //if (keypressed.includes(secretCode) && e.key === "Enter") {
    profilePicture.src = "images/drunk.png";
    const audio = document.createElement("audio");
    const source = document.createElement("source");
    source.src = "audio/chuli-leto.mp3";
    audio.appendChild(source);
    body.appendChild(audio);
    audio.currentTime = 107;
    audio.play();

    setInterval(function () {
      if (document.documentElement.getAttribute("data-theme") === "light") {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }, 300);
    //  }
  });
});
