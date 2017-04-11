//                variable declaration


var canvas;
var context;
var images = {};
var soundEffBor, soundEffMuch, soundEffGirls, soundEffGirlsGoAway,soundEffRobo, soundEffWin, soundEffNoMoney;
var volume = 0.2;
var volumeWin = 0.3;
var k; // proportional koeff
if (window.innerWidth / window.innerHeight < 1.22) {
  k = 0.9 * window.innerWidth;
} else {
  k = window.innerHeight / 0.85;
}
var sizeX = k;
var sizeY = sizeX * 0.56;
var progressBarH = sizeX * 0.025;
var totalResources = 26;
var numResourcesLoaded = 0;
var fps = 30;
var x;
var y;
var dx, dr, dy, dxFrog, dyFrog, kols, shift, sign, delta, dress;
var rostB, rostM, rostF, rostE;
var countdown = 7;
var pr = 'princess';

var eyeOpenTime = 0;
var timeBtwBlinks = 3000;
var blinkUpdateTime = 200;
var blinkTimer = setInterval(updateBlink, blinkUpdateTime);
var numFramesDrawn = 0;
var curFPS = 0;
var runningHor, runningVert;
var borovik, muchomor, frog, explosion, princess;
var xBorovik, yBorovik, xMuchomor, yMuchomor;
var xFrog, yFrog, xExp, yExp;
var b = slow(5);
var m = slow(7);
var f = slow(15);
var robo = slow(11);
var takebor, takemuch, takefrog, finishlevel;
var wGreen, wRed, wPrincess;
var progressGreen, progressRed, princessNum;
var greenWinNumber, redWinNumber, princessWinNumber;
var score;
var gamePaused;
var princessGreed, roboGreed;
var mission = ['mission 01: Everything is green', 'mission 02: Everything is red', 'mission 03: Everything is princess'];
var zagolovok;
var liMission;
var defaultVar = [varMission1, varMission2, varMission3];
var numMission;
var currentMission;
var currentWin;
var randomFrog;
var jump;

var maxEyeHeight = sizeX * 0.011;
var curEyeHeight = maxEyeHeight;


//                variable values for missions

function varMission1() {
  numMission = 0;
  currentMission = varMission1;
  volumeWin = 0.3;
  x = sizeX * 0.0926;
  y = sizeX * 0.4938;
  dx = 0;
  dr = 0;
  dy = 0;
  dxFrog = 0;
  dyFrog = 0;
  kols = 0;
  shift = 0;
  sign = 1;
  delta = 0;
  rostB = 0;
  rostM = 0;
  rostF = 0;
  rostE = 0;
  runningHor = false;
  runningVert = false;
  borovik = false;
  muchomor = false;
  frog = false;
  explosion = false;
  princess = false;
  xBorovik = sizeX * 0.03;
  yBorovik = sizeX * 0.03;
  xMuchomor = sizeX * 0.09;
  yMuchomor = sizeX * 0.09;
  xFrog = sizeX * 1.03;
  yFrog = sizeY / 2;
  xExp = 0;
  yExp = 0;
  takebor = false;
  takemuch = false;
  takefrog = false;
  finishlevel = false;
  wGreen = sizeX * 0.26;
  wRed = sizeX * 0.26;
  wPrincess = sizeX * 0.26;
  progressGreen = 0;
  progressRed = 0;
  princessNum = 0;
  greenWinNumber = 42;
  redWinNumber = 10;
  princessWinNumber = 5;
  score = 0;
  gamePaused = false;
  princessGreed = 1.5;
  roboGreed = 1
  randomFrog = 0;
  jump = 0.012345;
}

function varMission2() {

  numMission = 1;
  currentMission = varMission2;
  volumeWin = 0.3;
  x = sizeX * 0.5;
  y = sizeX * 0.2;
  dx = 0;
  dr = 0;
  dy = 0;
  dxFrog = 0;
  dyFrog = 0;
  kols = 0;
  shift = 0;
  sign = 1;
  delta = 0;
  rostB = 0;
  rostM = 0;
  rostF = 0;
  rostE = 0;
  runningHor = false;
  runningVert = false;
  borovik = false;
  muchomor = false;
  frog = false;
  explosion = false;
  princess = false;
  xBorovik = sizeX * 0.04;
  yBorovik = sizeX * 0.04;
  xMuchomor = sizeX * 0.19;
  yMuchomor = sizeX * 0.19;
  xFrog = sizeX * 1.03;
  yFrog = sizeY / 2;
  xExp = 0;
  yExp = 0;
  takebor = false;
  takemuch = false;
  takefrog = false;
  finishlevel = false;
  wGreen = sizeX * 0.26;
  wRed = sizeX * 0.26;
  wPrincess = sizeX * 0.26;
  progressGreen = 0;
  progressRed = 0;
  princessNum = 0;
  greenWinNumber = 10;
  redWinNumber = 42;
  princessWinNumber = 5;
  score = 0;
  gamePaused = false;
  princessGreed = 2;
  roboGreed = 2;
  randomFrog = 1;
  jump = 0.012345;
}

function varMission3() {
  numMission = 2;
  currentMission = varMission3;
  volumeWin = 0.3;
  x = sizeX * 0.8;
  y = sizeX * 0.2;
  dx = 0;
  dr = 0;
  dy = 0;
  dxFrog = 0;
  dyFrog = 0;
  kols = 0;
  shift = 0;
  sign = 1;
  delta = 0;
  rostB = 0;
  rostM = 0;
  rostF = 0;
  rostE = 0;
  runningHor = false;
  runningVert = false;
  borovik = false;
  muchomor = false;
  frog = false;
  explosion = false;
  princess = false;
  xBorovik = sizeX * 0.04;
  yBorovik = sizeX * 0.04;
  xMuchomor = sizeX * 0.19;
  yMuchomor = sizeX * 0.19;
  xFrog = sizeX * 1.03;
  yFrog = sizeY / 2;
  xExp = 0;
  yExp = 0;
  takebor = false;
  takemuch = false;
  takefrog = false;
  finishlevel = false;
  wGreen = sizeX * 0.26;
  wRed = sizeX * 0.26;
  wPrincess = sizeX * 0.26;
  progressGreen = 0;
  progressRed = 0;
  princessNum = 0;
  greenWinNumber = 10;
  redWinNumber = 10;
  princessWinNumber = 16;
  score = 0;
  gamePaused = false;
  princessGreed = 1.5;
  roboGreed = 1;
  randomFrog = 2;
  f = slow(20);
  jump = 0.008;
}

//varMission1();





//                win states for missions



function win01() {
  return ((progressGreen >= greenWinNumber) && (progressRed >= redWinNumber) && (princessNum >= princessWinNumber))
}

function win02() {
  return ((progressGreen >= greenWinNumber) && (progressRed >= redWinNumber) && (princessNum >= princessWinNumber))
}

function win03() {
  return ((progressGreen >= greenWinNumber) && (progressRed >= redWinNumber) && (princessNum >= princessWinNumber))
}


//                startPage Navigation

document.getElementById('header').style.height = 0.9 * window.innerHeight + 'px';
document.getElementById('choose').addEventListener('click', showMission);
document.getElementById('cross').addEventListener('click', closeRules);
document.getElementById('rules').addEventListener('click', showRulesSlow);

soundEffBor = document.getElementById("soundEffBor");
soundEffMuch = document.getElementById("soundEffMuch");
soundEffGirls = document.getElementById("soundEffGirls");
soundEffGirlsGoAway = document.getElementById("soundEffGirlsGoAway");
soundEffRobo = document.getElementById("soundEffRobo");
soundEffWin = document.getElementById("soundEffWin");
soundEffNoMoney = document.getElementById("soundEffNoMoney");


function closeRules() {
  document.getElementById('rulesPage').classList.add('invisible');
  document.getElementById('startPage').classList.remove('blur');
}

function showRulesSlow(func) {
  setTimeout(showRules(), 15);

}

function showRules() {
  document.getElementById('rulesPage').classList.remove('invisible');
  document.getElementById('startPage').classList.add('blur');
}

function missions() {
  liMission = document.getElementById('select').childNodes;
  for (var i = 0; i < liMission.length; i++) {
    liMission[i].addEventListener('click', chooseMission);
    liMission[i].innerHTML = mission[liMission[i].value];
  }
}

function contSize(x, y) {
  container = document.getElementById('container-game');
  container.style.width = x + 'px';
  container.style.height = y + 'px';
}

function showMission() {
  document.getElementById('select').classList.toggle('invisible');
  missions();
}

function showMissionAlw() {
  document.getElementById('select').classList.remove('invisible');
  missions();
}

function chooseMission() {
  numMission = this.value;
  switch (numMission) {
    case 0:
      currentMission = varMission1;
      varMission1();
      currentWin = win01;
      break;
    case 1:
      currentMission = varMission2;
      varMission2();
      currentWin = win02;
      break;
    case 2:
      currentMission = varMission3;
      varMission3();
      currentWin = win03;
      break;
  }

  document.getElementById('choose').innerHTML = mission[numMission].trim();
  document.getElementsByTagName('h2')[0].innerHTML = mission[numMission].trim();
  document.getElementById('select').classList.add('invisible');
  document.getElementById('start').classList.remove('li-disabled');
}

document.getElementById('restart-mission').addEventListener('click', print);

function print() {
  currentMission();
  blurr();
}

function blurr() {
  if (document.activeElement != document.body) document.activeElement.blur();
}
document.getElementById('pause-game').addEventListener('click', pauseGameFull);
document.getElementById('choose-mission').addEventListener('click', chooseMissionFull);
document.getElementById('no-sound').addEventListener('click', noSound);

function noSound(){
    var elemText = document.getElementById('no-sound');
  if (elemText.innerHTML == 'Mute') {
    elemText.innerHTML = 'Unmute';
    blurr();
    volume = 0;
  } else {
    elemText.innerHTML = 'Mute';
    blurr();
    volume = 0.2;
  }
}

function chooseMissionFull() {

  document.getElementById('canvasDiv').innerHTML = '';
  contSize(0, 0);
  document.getElementById('startPage').classList.remove('invisible');
  document.getElementById('gamePage').classList.add('invisible');
  blurr();
  setTimeout(showMissionAlw(), 10);
}

document.getElementById('start').addEventListener('click', startGame);

function startGame() {
  document.getElementById('startPage').classList.add('invisible');
  document.getElementById('gamePage').classList.remove('invisible');
  contSize(sizeX + 8, sizeX * 0.82);
  prepareCanvas(document.getElementById('canvasDiv'), sizeX, sizeX * 0.67284);

}


//                gamePage Navigation

function prepareCanvas(canvasDiv, canvasWidth, canvasHeight) {
  // Create the canvas (Neccessary for IE because it doesn't know what a canvas element is)
  canvas = document.createElement('canvas');
  canvas.setAttribute('width', canvasWidth);
  canvas.setAttribute('height', canvasHeight);
  canvas.setAttribute('id', 'canvas');
  canvasDiv.appendChild(canvas);

  if (typeof G_vmlCanvasManager != 'undefined') {
    canvas = G_vmlCanvasManager.initElement(canvas);
  }
  context = document.getElementById('canvas').getContext('2d');


  loadImage("robo_torso");
  loadImage("robo_gus");
  loadImage("robo_kolo");
  loadImage("robo_head");
  loadImage("robo_eye");
  loadImage("borovik");
  loadImage("muchomor");
  loadImage("frog_green");
  loadImage("explosion");
  loadImage("princess01");

  loadImage("princess02");
  loadImage("princess03");
  loadImage("princess04");
  loadImage("princess05");
  loadImage("princess06");
  loadImage("princess07");
  loadImage("princess08");
  loadImage("princess09");
  loadImage("princess10");
  loadImage("princess11");

  loadImage("princess12");
  loadImage("princess13");
  loadImage("princess14");
  loadImage("princess15");
  loadImage("img-noise-300x300");
  loadImage("fon_sq");
}

function loadImage(name) {

  images[name] = new Image();
  images[name].onload = function() {
    resourceLoaded();
  }
  images[name].src = 'images/' + name + '.png';
}

function resourceLoaded() {

  numResourcesLoaded += 1;
  if (numResourcesLoaded === totalResources) {

    game = setInterval(redraw, 1000 / fps);
  }
}



function redraw() {

  // YOU Game start?
  if (!currentWin) {
    return;
  } //   NO
  else {

    // varMission1();
    // contSize();
    //  console.log(sizeX);
    //  prepareCanvas(document.getElementById('canvasDiv'), sizeX, sizeX*0.67284);

    canvas.width = canvas.width; //    YESS! clears the canvas 


    // YOU WIN situation
    score = progressGreen + progressRed + princessNum * 20;

    if (currentWin()) {
      if (soundEffWin.ended) { volumeWin = 0; }
      soundEffWin.volume = volumeWin;
      soundEffWin.play();
      
      context.fillStyle = '#f6e464';
      context.font = 'bold ' + sizeX * 0.06 + 'px sans-serif';
      context.fillText('Well done!', sizeX * 0.34, sizeY / 2 + sizeX * 0.09);
      circle(sizeX * 0.486, sizeX * 0.18, sizeX * 0.02, sizeX * 0.02);

      context.fillStyle = 'white';
      context.font = 'normal ' + sizeX * 0.03 + 'px sans-serif';
      context.fillText('You had complete this mission!', sizeX * 0.275, sizeX * 0.45);
      context.fillText('Your score: ' + score, sizeX * 0.385, sizeX * 0.5);
      finishlevel = true;
      kols = 0;
      Robo(sizeX * 0.49, sizeX * 0.18, 0, 0);


    } else { soundEffRobo.volume = 0;

      // Robo moves  

      if (runningHor) {
          soundEffRobo.volume = volume;
          soundEffRobo.play();

        if ((x + dx + sizeX * 0.01 <= sizeX) && (x + dx >= sizeX * 0.06)) {
          dx += sign * sizeX * 0.01;
        } else if (x + dx + sizeX * 0.01 <= sizeX) {
          dx = 0.96 * sizeX - 1 - x;
        } else {
          dx = sizeX * 0.06 + 1 - x;
        }
        kols = Math.abs(kols + 36 * sign) % 216;
        shift = sign * sizeX * 0.004;
      } 

      if (runningVert) {
          soundEffRobo.volume = volume;
          soundEffRobo.play();

        if ((y + dy + sizeX * 0.06 <= sizeY) && (y + dy >= sizeX * 0.09)) {
          dy += sign * sizeX * 0.006;
        } else if (y + dy + sizeX * 0.074 <= sizeY) {
          dy = sizeY - 1 - sizeX * 0.074 - y;
        } else {
          dy = sizeX * 0.09 + 1 - y;
        }
        kols = Math.abs(kols + 36 * sign) % 216;
      } 

      // Borovik initialise

      if ((!borovik) && (!takebor)) {
        xBorovik = getRandomInt(sizeX * 0.037, sizeX * 0.963);
        yBorovik = getRandomInt(sizeX * 0.12345, sizeX * 0.43655);
        if (intersection(xBorovik, yBorovik, 48 * k, 60 * k, x - sizeX * 0.056 + dx, y - sizeX * 0.044 + dy, sizeX * 0.1, sizeX * 0.11) ||
          (xMuchomor == xBorovik) || (yMuchomor == yBorovik)) {
          borovik = false;
        } else {
          borovik = true;
        }
      } else {
        if (b() == 3) {
          rostB += 48;
          if (rostB == 960) {
            borovik = false;
            rostB = 0;
          }
        }
      }

      // End Borovik initialise

      // Muchomor initialise

      if ((!muchomor) && (!takemuch)) {
        xMuchomor = getRandomInt(sizeX * 0.037, sizeX * 0.963);
        yMuchomor = getRandomInt(sizeX * 0.12345, sizeX * 0.43655);
        if (intersection(xMuchomor, yMuchomor, 48, 60, x - sizeX * 0.056 + dx, y - sizeX * 0.044 + dy, sizeX * 0.1, sizeX * 0.11) ||
          (xMuchomor == xBorovik) || (yMuchomor == yBorovik)) {
          muchomor = false;
        } else {
          muchomor = true;
        }
      } else {
        if (m() == 5) {
          rostM += 48;
          if (rostM == 960) {
            muchomor = false;
            rostM = 0;
          }
        }
      }

      //   End Muchomor initialise

      //  Frog initialise

      if (!frog) {
        xFrog = sizeX * 1.03;
        yFrog = getRandomInt(sizeX * 0.09, sizeX * 0.48);
        var random = getRandomInt(0, sizeX);
        if (random < sizeX * 0.95) {
          frog = false;
        } else {
          frog = true;
          delta = 64;
          dxFrog = 0
          dyFrog = 0;
        }
      } else {
        
          random = getRandomInt(-20, 20) / 1000 * randomFrog;

          if (yFrog + dyFrog < sizeX * 0.06) {
            random = Math.abs(random);
          } else if (yFrog + dyFrog > sizeX * 0.46) {
            random = -Math.abs(random);
          }
          dxFrog -= sizeX * jump / (Math.abs(random) + 1);
          dyFrog += sizeX * random;
          rostF = (rostF + delta) % 768;
          if (rostF == 0) {
            if (f() == 11) {
              delta = 64;
            } else {
              delta = 0;
              dxFrog += sizeX * jump;
              dyFrog -= sizeX * random;
            }
          }
          if (xFrog + dxFrog < -40) {
            frog = false;
            rostF = 0;
          }
        
      }
      //   End Frog initialise

      if (progressRed == 0) {
        soundEffGirls.volume = 0;
        if (princess) {
          soundEffGirlsGoAway.volume = volume;
          soundEffGirlsGoAway.play();
        }
      
        princess = false;
        princessNum = 0;
      }

      function missionColor(condition) {
        if (condition) {
          context.fillStyle = '#f6e464';
        } else {
          context.fillStyle = 'white';
        }
      }

     // progressGreen >= greenWinNumber

    //  context.fillStyle = '#c6e1b2'; // light green color //
    //  context.fillRect(0, progressBarH, sizeX, sizeY - progressBarH);
      context.drawImage(images['fon_sq'], 0, progressBarH, sizeX, sizeY - progressBarH);

      var noise = context.createPattern(images['img-noise-300x300'], 'repeat');
      context.fillStyle = noise;
      context.fillRect(0, progressBarH, sizeX, sizeY - progressBarH);

      context.fillStyle = 'white';
      context.fillRect(0, 0, sizeX, progressBarH);
      context.font = 'normal ' + 0.0173 * sizeX + 'px sans-serif';

      context.fillText('Your mission: ', 0.753 * sizeX, sizeY + 0.02 * sizeX);
      missionColor(progressGreen >= greenWinNumber);
      context.fillText(greenWinNumber + '  Green energy', 0.753 * sizeX, sizeY + 0.04 * sizeX);
      missionColor(progressRed >= redWinNumber);
      context.fillText(redWinNumber + '  Red energy', 0.753 * sizeX, sizeY + 0.06 * sizeX);
      missionColor(princessNum >= princessWinNumber);
      context.fillText(princessWinNumber + '  resqured Princesses', 0.753 * sizeX, sizeY + 0.08 * sizeX);

      context.fillStyle = '#85ba8b'; // saturate green color //
      context.fillRect(0, 0, 10 + NotMoreUp(wGreen / NumNoZero(greenWinNumber) * progressGreen, wGreen), progressBarH);

      context.fillStyle = '#e6af57'; // Orange color //
      context.fillRect(10 + wGreen, 0, 10 + NotMoreUp(wRed / NumNoZero(redWinNumber) * progressRed, wRed), progressBarH);

      context.fillStyle = '#d2d24d'; // Princesses color //
      context.fillRect(20 + wGreen + wRed, 0, 10 + NotMoreUp(wPrincess / NumNoZero(princessWinNumber) * princessNum, wPrincess), progressBarH);

      context.font = 'bold ' + 0.0173 * sizeX + ' px sans-serif';
      context.fillStyle = '#333333'; // light gray color //
      if ((princessNum == 0) || (princessNum == 1)) {
        pr = ' princess'
      } else {
        pr = ' princesses'
      }
      context.fillText('Green Energy Level ' + progressGreen, 20, progressBarH / 2 + 0.006 * sizeX);
      context.fillText('Red Energy Level ' + progressRed, 30 + wGreen, progressBarH / 2 + 0.006 * sizeX);
      context.fillText('Resued ' + princessNum + pr, 40 + wGreen + wRed, progressBarH / 2 + 0.006 * sizeX);
      context.fillText('Your score: ' + score, 50 + wGreen + wRed + wPrincess, progressBarH / 2 + 0.006 * sizeX);

      //   borovik


      if (borovik) {
        context.drawImage(images['borovik'], rostB, 0, 48, 60, xBorovik, yBorovik, 0.0296 * sizeX, 0.037 * sizeX);
      }

      if (intersection(xBorovik-6, yBorovik-6, 0.0296 * sizeX+4, 0.037 * sizeX+4, x - 0.05 * sizeX + dx, y + 0.0142 * sizeX + dy, 0.0988 * sizeX, 0.0432 * sizeX)) {
        takebor = true;
      }

      if (takebor) {
        if (countdown == 0) {
          soundEffBor.volume = volume;
          soundEffBor.play();
          takebor = false;
          countdown = 7;
          progressGreen++;
        } else {
          borovik = false;
          circle(xBorovik + 0.0148 * sizeX, yBorovik + 0.0185 * sizeX, countdown, "#4edc16");
          countdown--;
          rostB = 0;
        }
      }


      if (muchomor) {
        context.drawImage(images["muchomor"], rostM, 0, 48, 60, xMuchomor, yMuchomor, 0.0296 * sizeX, 0.037 * sizeX);
      }

      if (intersection(xMuchomor-6, yMuchomor-6, 0.0296 * sizeX+4, 0.037 * sizeX+4, x - 0.05 * sizeX + dx, y + 0.0142 * sizeX + dy, 0.0988 * sizeX, 0.0432 * sizeX)) {
        takemuch = true;
      }

      if (takemuch) {
        if (countdown == 0) {
          soundEffMuch.volume = volume;
          soundEffMuch.play();
          takemuch = false;
          countdown = 7;
          progressRed++;
        } else {
          muchomor = false;
          circle(xMuchomor + 0.0148 * sizeX, yMuchomor + 0.0185 * sizeX, countdown, "#ff8f45");
          countdown--;
          rostM = 0;
        }
      }

      if (frog) {
        context.drawImage(images["frog_green"], rostF, 0, 64, 80, xFrog + dxFrog, yFrog + dyFrog, 0.0395 * sizeX, 0.0494 * sizeX);

        if (intersection(xFrog + dxFrog, yFrog + dyFrog, 0.0395 * sizeX, 0.0494 * sizeX, x - sizeX * 0.056 + dx, y - sizeX * 0.044 + dy, sizeX * 0.1, sizeX * 0.11)) {
          takefrog = true;
          xExp = xFrog + dxFrog;
          yExp = yFrog + dyFrog;
        }

        if (takefrog) {
          frog = false;
          rostF = 0;
          explosion = true;
          takefrog = false;
        }

        if (explosion) {
          rostE += 128;
          if (rostE == 768) {
            explosion = false;
            rostE = 0;
            if (progressRed > 0) {
              soundEffGirls.volume = volume;
              soundEffGirls.play();
              princess = true;
              princessNum++;
            } else {               
              soundEffNoMoney.volume = volume;
              soundEffNoMoney.play();
            }
          }
          context.drawImage(images["explosion"], rostE, 0, 128, 128, xExp, yExp, sizeX * 0.079, sizeX * 0.079);
        }
      } // end if frog

      if (princess) {
        for (var i = 1; i <= princessNum; i++) {
          switch (true) {
            case (i % 15 == 1):
              dress = images["princess01"];
              break;
            case (i % 15 == 2):
              dress = images["princess02"];
              break;
            case (i % 15 == 3):
              dress = images["princess03"];
              break;
            case (i % 15 == 4):
              dress = images["princess04"];
              break;
            case (i % 15 == 5):
              dress = images["princess05"];
              break;
            case (i % 15 == 6):
              dress = images["princess06"];
              break;
            case (i % 15 == 7):
              dress = images["princess07"];
              break;
            case (i % 15 == 8):
              dress = images["princess08"];
              break;
            case (i % 15 == 9):
              dress = images["princess09"];
              break;
            case (i % 15 === 10):
              dress = images["princess10"];
              break;
            case (i % 15 === 11):
              dress = images["princess11"];
              break;
            case (i % 15 === 12):
              dress = images["princess12"];
              break;
            case (i % 15 === 13):
              dress = images["princess13"];
              break;
            case (i % 15 === 14):
              dress = images["princess14"];
              break;
            case (i % 15 === 0):
              dress = images["princess15"];
              break;
          }
          context.drawImage(dress, 10 + sizeX * 0.037 * (i - 1), sizeX * 0.561, sizeX * 0.0926, sizeX * 0.111);
        }
      } // end if princess


      Robo(x, y, dx, dy);

    }
  }
}

function Robo(x, y, dx, dy) {

  context.drawImage(images["robo_torso"], x - sizeX * 0.04938 + dx, y - sizeX * 0.0185 + dy, sizeX * 0.05679, sizeX * 0.041358);
  context.drawImage(images["robo_gus"], x - sizeX * 0.05679 + dx, y + sizeX * 0.02 + dy, sizeX * 0.08642, sizeX * 0.03);
  context.drawImage(images["robo_kolo"], kols, 0, 36, 36, x - sizeX * 0.04938 + dx, y + sizeX * 0.02469 + dy, sizeX * 0.02222, sizeX * 0.02222);
  context.drawImage(images["robo_kolo"], kols, 0, 36, 36, x - sizeX * 0.02469 + dx, y + sizeX * 0.02469 + dy, sizeX * 0.02222, sizeX * 0.02222);
  context.drawImage(images["robo_kolo"], kols, 0, 36, 36, x + dx, y + sizeX * 0.02469 + dy, sizeX * 0.02222, sizeX * 0.02222);
  context.drawImage(images["robo_head"], 0, 0, 90, 45, x - sizeX * 0.0216 + dx, y - sizeX * 0.045679 + dy, sizeX * 0.05556, sizeX * 0.027778);
  context.drawImage(images["robo_eye"], x - sizeX * 0.015 + dx, y - sizeX * 0.0432 + dy, sizeX * 0.0185, sizeX * 0.0216);
  context.drawImage(images["robo_eye"], x + sizeX * 0.00926 + dx, y - sizeX * 0.0432 + dy, sizeX * 0.0185, sizeX * 0.0216);

  drawEllipse(x - sizeX * 0.006173 + dx + shift, y - sizeX * 0.032 + dy + Math.abs(shift / 2), sizeX * 0.01, curEyeHeight); // Left Eye
  drawEllipse(x + sizeX * 0.0185 + dx + shift, y - sizeX * 0.032 + dy + Math.abs(shift / 2), sizeX * 0.01, curEyeHeight); // Right Eye

} // end Robo(x,y,dx,dy) 

function circle(x, y, r, color) {
  context.beginPath();
  context.arc(x, y, r * 5, 0, 2 * Math.PI);
  context.fillStyle = color;
  context.fill();
} // end circle (x,y,r,color);

function intersection(x1, y1, dx1, dy1, x2, y2, dx2, dy2) {
  if (((x2 < x1) && (x1 < x2 + dx2) && (y2 < y1) && (y1 < y2 + dy2)) ||
    ((x1 < x2) && (x2 < x1 + dx1) && (y1 < y2) && (y2 < y1 + dy1))) {
    return true;
  }
} // end intersection(x1,y1,dx1,dy1,x2,y2,dx2,dy2)

function slow(number) {
  var i = 0;
  return function() {
    i++;
    return (i % number);
  };
} //end slow(number)

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
} //end getRandomInt(min, max)

function drawEllipse(centerX, centerY, width, height) {

  context.beginPath();

  context.moveTo(centerX, centerY - height / 2);

  context.bezierCurveTo(
    centerX + width / 2, centerY - height / 2,
    centerX + width / 2, centerY + height / 2,
    centerX, centerY + height / 2);

  context.bezierCurveTo(
    centerX - width / 2, centerY + height / 2,
    centerX - width / 2, centerY - height / 2,
    centerX, centerY - height / 2);

  context.fillStyle = 'black';
  context.fill();
  context.closePath();
} // end drawEllipse(centerX, centerY, width, height)


function updateBlink() {

  eyeOpenTime += blinkUpdateTime;

  if (eyeOpenTime >= timeBtwBlinks) {
    blink();
    if ((robo() == 5) && (!finishlevel)) {
      if (princessNum > 4) {
        progressGreen = NoLessZero(progressGreen - roboGreed);
      }
      progressRed = NoLessZero(progressRed - 1);
      progressGreen = NoLessZero(progressGreen - 1);
    } else if ((robo() == 9) && (!finishlevel)) {
      progressRed = NoLessZero(progressRed - Math.round(princessGreed * princessNum));
      progressGreen = progressGreen + Math.round(princessNum / 2);
    }
  }
} // updateBlink()

function NoLessZero(num) {
  if (num < 0) {
    return 0;
  } else {
    return num;
  }
} // end NoLessZero(num)

function NumNoZero(num) {
  if (num == 0) {
    return 100;
  } else {
    return num;
  }
} // end NumNoZero(num)

function NotMoreUp(num, up) {
  if (num > up) {
    return up;
  } else {
    return num;
  }
} // end NotMoreUp(num, up)

function blink() {

  curEyeHeight -= 1;
  if (curEyeHeight <= 0) {
    eyeOpenTime = 0;
    curEyeHeight = maxEyeHeight;
  } else {
    setTimeout(blink, 10);
  }
} //end blink

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  switch (e.keyCode) {
    case 39:
      runningHor = true;
      runningVert = false;
      sign = 1;
      break;
    case 37:
      runningHor = true;
      runningVert = false;
      sign = -1;
      break;
    case 38:
      runningHor = false;
      runningVert = true;
      shift = 0;
      sign = -1;
      break;
    case 40:
      runningHor = false;
      runningVert = true;
      shift = 0;
      sign = 1;
      break;
    case 80:
      pauseGameFull();

    default:
      runningHor = false;
      runningVert = false;

  } //switch
} // keyDownHandler(e)


function keyUpHandler(e) {
  if (runningHor) {
    runningHor = false;
    sign = 1;
    setTimeout(function() {
      shift = 0
    }, 1000);
  } else if (runningVert) {
    runningVert = false;
  }
} // end keyUpHandler(e)

function pauseGame() {
  if (!gamePaused) {
    game = clearInterval(game);
    gamePaused = true;
  } else if (gamePaused) {
    game = setInterval(redraw, 1000 / fps);
    gamePaused = false;
  }
} //end pauseGame()

function disabled(elem) {
  if (elem.hasAttribute('disabled')) {
    elem.removeAttribute('disabled');
  } else {
    elem.setAttribute('disabled', 'disabled');
  }
}

function pauseGameFull() {
  var elemText = document.getElementById('pause-game');
  if (elemText.innerHTML == 'Pause game') {
    elemText.innerHTML = 'Resume game';
    blurr();
  } else {
    elemText.innerHTML = 'Pause game';
    blurr();
  }

  disabled(document.getElementById('restart-mission'));
  disabled(document.getElementById('choose-mission'));
  pauseGame();

} //end pauseGameFull()

