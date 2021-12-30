const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

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
  document.addEventListener("WeixinJSBridgeReady", function() {
    document.getElementById('bgmusic').play();
  }, false);
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
  startSnow()
  document.getElementById('btn').onclick = () => {
    const h1Box = document.getElementsByTagName('h1')[0]
    h1Box.className = 'h1Animation'
    setInterval(() => {
      console.log(h1Box.innerHTML.startsWith('Lcy'))
      if (h1Box.innerHTML.startsWith('Lcy')) {
        h1Box.innerHTML = '新年快乐'
      }else if (h1Box.innerHTML.startsWith('新年快乐')) {
        h1Box.innerHTML = '明けましておめでとう'
      } else if (h1Box.innerHTML.startsWith('明けましておめでとう')) {
        h1Box.innerHTML = 'Lcy Wish You A Happy New Year'
      }
    }, 6000)
    document.getElementById('countdown').className = 'countdown countdownAnimation'
    document.getElementById('btn').style.display = 'none'
    startFirework()
    // startMusic()
  }
  autoPlayAudio1()

}
function startFirework () {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  resizeCanvas();
  // audioAutoPlay()
    window.requestAnimationFrame(updateWorld);
}

function resizeCanvas() {
  if (!!canvas) {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
}

function updateWorld() {
  update();
  paint();
  window.requestAnimationFrame(updateWorld);
}

function update() {
  if (particles.length < 100 && Math.random() < probability) {
    createFirework();
  }
  var alive = [];
  for (var i=0; i<particles.length; i++) {
    if (particles[i].move()) {
      alive.push(particles[i]);
    }
  }
  particles = alive;
}

function paint() {
  ctx.globalCompositeOperation = 'source-over';
  ctx.fillStyle = "rgba(0,0,0,0.2)";
  ctx.fillRect(0, 0, w, h);
  ctx.globalCompositeOperation = 'lighter';
  for (var i=0; i<particles.length; i++) {
      particles[i].draw(ctx);
  }
}

function createFirework() {
  xPoint = Math.random()*(w-200)+100;
  yPoint = Math.random()*(h-700)+100;
  var nFire = Math.random()*50+100;
  var c = "rgb("+(~~(Math.random()*200+55))+","
      +(~~(Math.random()*200+55))+","+(~~(Math.random()*200+55))+")";
  for (var i=0; i<nFire; i++) {
    var particle = new Particle();
    particle.color = c;
    var vy = Math.sqrt(25-particle.vx*particle.vx);
    if (Math.abs(particle.vy) > vy) {
      particle.vy = particle.vy>0 ? vy: -vy;
    }
    particles.push(particle);
  }
}

function Particle() {
  this.w = this.h = Math.random()*4+1;

  this.x = xPoint-this.w/2;
  this.y = yPoint-this.h/2;

  this.vx = (Math.random()-0.5)*10;
  this.vy = (Math.random()-0.5)*10;

  this.alpha = Math.random()*.5+.5;

  this.color;
}

Particle.prototype = {
  gravity: 0.05,
  move: function () {
    this.x += this.vx / 2;
    this.vy += this.gravity;
    this.y += this.vy / 2;
    this.alpha -= 0.005;
    return !(this.x <= -this.w || this.x >= screen.width ||
        this.y >= screen.height ||
        this.alpha <= 0);
  },
  draw: function (c) {
    c.save();
    c.beginPath();
    c.translate(this.x+this.w/2, this.y+this.h/2);
    c.arc(0, 0, this.w, 0, Math.PI*2);
    c.fillStyle = this.color;
    c.globalAlpha = this.alpha;
    c.closePath();
    c.fill();
    c.restore();
  }
}

let time = 0
function startMusic(e) {
  console.log(e)
  if (time === 0) {
    const contextClass = window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
    console.log(contextClass)
    try {
      var context = new contextClass();
      var source = null;
      var audioBuffer = null;
      function playSound() {
        source = context.createBufferSource();
        source.buffer = audioBuffer;
        source.loop = true;
        source.connect(context.destination);
        source.start(0); //立即播放
      }
      function initSound(arrayBuffer) {
        context.decodeAudioData(arrayBuffer, function (buffer) { //解码成功时的回调函数
          audioBuffer = buffer;
          playSound();
        }, function (e) { //解码出错时的回调函数
          console.log('404', e);
        });
      }
      function loadAudioFile(url) {
        var xhr = new XMLHttpRequest(); //通过XHR下载音频文件
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function (e) { //下载完成
          initSound(this.response);
        };
        xhr.send();
      }
      //这里用来存储背景音乐的路径
      loadAudioFile('./bacc.mp3');
    } catch (e) {
      console.log('无法找到音乐！');
    }
    time++
  }


}
