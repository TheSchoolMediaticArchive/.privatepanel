form.hidden = false;
function submit()
{
 var music = new Audio("https://vgmsite.com/soundtracks/gamecube-system-music/ldxhuyni/004%20-%20Nintendo%20GameCube%20Menu.mp3");
  music.looping = true;
  music.play();
    const form = document.getElementById("form");
    const admun = document.getElementById("admin");
   const usr = document.getElementById("usr").value;
   const pass = document.getElementById("code").value;
  if (usr =="Admin")
    {
      if (pass == "12345678")
        {
          fetch('https://api.github.com/repos/TheSchoolMediaticArchive/CDG/commits?per_page=')
  .then(res => res.json())
  .then(res => {
    document.getElementById('message').innerHTML = res[0].commit.message
    document.getElementById('author').innerHTML = res[0].commit.author.name
  })
  form.hidden = true;
             // Create shockwave elements
    for(let i = 0; i < 3; i++) {
      setTimeout(() => {
        const shockwave = document.createElement('div');
        shockwave.className = 'shockwave';
        document.querySelector('.container').appendChild(shockwave);
        
        // Remove shockwave after animation
        setTimeout(() => shockwave.remove(), 1000);
      }, i * 200);
    }

  admun.hidden = false;
         
        }
    }
}
