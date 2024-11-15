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
  if (usr =="luacoder279")
    {
      if (pass == "1520")
        {
          fetch('https://api.github.com/repos/Fusion-Softworks-LLC/Fusion-Utility-System/commits?per_page=')
  .then(res => res.json())
  .then(res => {
    document.getElementById('message').innerHTML = res[0].commit.message
    document.getElementById('author').innerHTML = res[0].commit.author.name
  })
  form.hidden = true;
  admun.hidden = false;
         
        }
    }
}