const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
var soundLoadComplete = false; // 背景音乐是否加载完毕
var backgroundMusicInstance = null; // 背景音乐实例
createjs.Sound.alternateExtensions = ['mp3'];
createjs.Sound.on('fileload', loadHandler, this);

function loadHandler(event) {
    soundLoadComplete = true;
}
// Set background year
year.innerText = currentYear + 1;
// Update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Add values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
}

// Show spinner before countdown
setTimeout(() => {
  countdown.style.display = 'flex';
}, 1000);
function autoPlayAudio1() {
  document.getElementById('bgmusic').play();
}
// Run every second
setInterval(updateCountdown, 1000);
window.addEventListener("resize", resizeCanvas, false);
onLoad()
window.requestAnimationFrame =
    window.requestAnimationFrame       ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function (callback) {
      callback()
    };

var canvas, ctx, w, h, particles = [], probability = 0.04,
    xPoint, yPoint;

function startFirework () {
  const container = document.body
  const fireworks = new Fireworks.Fireworks(container, {
      autoresize: true,
      opacity: 0.2,
      acceleration: 1,
      friction: 0.97,
      gravity: 1.5,
      particles: 100,
      traceLength: 3,
      traceSpeed: 3,
      explosion: 8,
      intensity: 30,
      flickering: 50,
      lineStyle: 'square',
      hue: {
          min: 0,
          max: 345
      },
      delay: {
          min: 30,
          max: 60
      },
      rocketsPoint: {
          min: 50,
          max: 50
      },
      lineWidth: {
          explosion: {
          min: 1,
          max: 4
          },
          trace: {
          min: 0.1,
          max: 1
          }
      },
      brightness: {
          min: 50,
          max: 80
      },
      decay: {
          min: 0.015,
          max: 0.03
      },
      mouse: {
          click: false,
          move: false,
          max: 1
      },
      sound:{
          enabled: true,
          files: [
      'explosion0.mp3',
      'explosion1.mp3',
      'explosion2.mp3'
    ],
           volume: {
      min: 50,
      max: 200
    }
      }
      })
  fireworks.start()
}

function startSnow () {
  //canvas init
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
  //snowflake particles
  var mp = 50; //max particles
  var particles = [];
  for(var i = 0; i < mp; i++)
  {
    particles.push({
      x: Math.random()*W, //x-coordinate
      y: Math.random()*H, //y-coordinate
      r: Math.random()*4+1, //radius
      d: Math.random()*mp //density
    })
  }
  //Lets draw the flakes
  function draw()
  {
    ctx.clearRect(0, 0, W, H);

    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.beginPath();
    for(var i = 0; i < mp; i++)
    {
      var p = particles[i];
      ctx.moveTo(p.x, p.y);
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
    }
    ctx.fill();
    update();
  }
  //Function to move the snowflakes
  //angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
  var angle = 0;
  function update()
  {
    angle += 0.01;
    for(var i = 0; i < mp; i++)
    {
      var p = particles[i];
      //Updating X and Y coordinates
      //We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
      //Every particle has its own density which can be used to make the downward movement different for each flake
      //Lets make it more random by adding in the radius
      p.y += Math.cos(angle+p.d) + 1 + p.r/2;
      p.x += Math.sin(angle) * 2;

      //Sending flakes back from the top when it exits
      //Lets make it a bit more organic and let flakes enter from the left and right also.
      if(p.x > W+5 || p.x < -5 || p.y > H)
      {
        if(i%3 > 0) //66.67% of the flakes
        {
          particles[i] = {x: Math.random()*W, y: -10, r: p.r, d: p.d};
        }
        else
        {
          //If the flake is exitting from the right
          if(Math.sin(angle) > 0)
          {
            //Enter from the left
            particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
          }
          else
          {
            //Enter from the right
            particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
          }
        }
      }
    }
  }
  //animation loop
  setInterval(draw, 33);
}

function onLoad() {
  
  document.getElementById('btn').onclick = () => {
    startSnow()
    autoPlayAudio1()
    const h1Box = document.getElementsByTagName('h1')[0]
      h1Box.className = 'h1Animation'
      setInterval(() => {
        if (h1Box.innerHTML.indexOf('新年')>0) {
          h1Box.innerHTML = 'FoloToy Wish You A Happy New Year'
        }else {
          h1Box.innerHTML = `FoloToy 祝您新年快乐`
        }
      }, 6000)
      document.getElementById('countdown').className = 'countdown countdownAnimation'
      document.getElementById('btn').style.display = 'none'
      startFirework()
  }

    // autoPlayAudio1()

}

function resizeCanvas() {
  if (!!canvas) {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
}

