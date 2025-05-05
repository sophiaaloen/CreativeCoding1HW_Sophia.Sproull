let buttons = [];
let colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'lime'];
let sounds = [];
let powerOn = false;
let powerButton;
let volumeSlider;

function preload() {
  for (let i = 0; i < 9; i++) {
    sounds[i] = loadSound('sounds/sound' + i + '.wav');
  }
}

function setup() {
  createCanvas(600, 700);
  background(220);

  let buttonSize = 100;
  let padding = 20;
  let panelWidth = 420;
  let panelHeight = 580;
  let panelX = (width - panelWidth) / 2;
  let panelY = 30;

  let startX = panelX + (panelWidth - (buttonSize * 3 + padding * 2)) / 2;
  let startY = panelY + 30;

  for (let i = 0; i < 9; i++) {
    let x = startX + (i % 3) * (buttonSize + padding);
    let y = startY + floor(i / 3) * (buttonSize + padding);
    buttons.push(new SoundButton(x, y, buttonSize, colors[i], sounds[i]));
  }

  volumeSlider = createSlider(0, 1, 0.5, 0.01);
  volumeSlider.position(width / 2 - 100, panelY + panelHeight - 70);
  volumeSlider.style('width', '200px');

  powerButton = new PowerButton(width / 2 - 50, panelY + panelHeight + 20, 100, 40);
}

function draw() {
  background(220);

  let panelWidth = 420;
  let panelHeight = 580;
  let panelX = (width - panelWidth) / 2;
  let panelY = 30;

  fill(10, 10, 50);
  noStroke();
  rect(panelX, panelY, panelWidth, panelHeight, 20);

  fill(255);
  textSize(28);
  textAlign(CENTER);
  text("SOUNDBOARD", width / 2, panelY + 420);

  textSize(16);
  text("Volume", width / 2, panelY + panelHeight - 90);

  let vol = volumeSlider.value();
  for (let snd of sounds) {
    snd.setVolume(vol);
  }

  for (let btn of buttons) {
    btn.display();
  }

  powerButton.display();
}

function mousePressed() {
  for (let btn of buttons) {
    btn.handleClick(mouseX, mouseY);
  }
  powerButton.handleClick(mouseX, mouseY);
}

class SoundButton {
  constructor(x, y, size, baseColorName, sound) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.baseColor = color(baseColorName);
    this.lighterColor = lerpColor(this.baseColor, color(255), 0.4);
    this.isPressed = false;
    this.sound = sound;
  }

  display() {
    stroke(180);
    strokeWeight(3);
    let currentColor;

    if (!powerOn) {
      currentColor = lerpColor(this.baseColor, color(0), 0.5);
    } else if (this.isPressed) {
      currentColor = this.lighterColor;
    } else {
      currentColor = this.baseColor;
    }

    fill(currentColor);
    rect(this.x, this.y, this.size, this.size, 10);
  }

  handleClick(mx, my) {
    if (
      mx > this.x && mx < this.x + this.size &&
      my > this.y && my < this.y + this.size &&
      powerOn
    ) {
      this.isPressed = !this.isPressed;
      if (this.isPressed && !this.sound.isLooping()) {
        this.sound.loop();
      } else {
        this.sound.stop();
      }
    }
  }

  turnOff() {
    this.isPressed = false;
    this.sound.stop();
  }
}

class PowerButton {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  display() {
    fill(powerOn ? 'green' : 'darkred');
    stroke(255);
    strokeWeight(2);
    rect(this.x, this.y, this.w, this.h, 8);
    fill(255);
    noStroke();
    textSize(16);
    textAlign(CENTER, CENTER);
    text(powerOn ? "POWER ON" : "POWER OFF", this.x + this.w / 2, this.y + this.h / 2);
  }

  handleClick(mx, my) {
    if (
      mx > this.x && mx < this.x + this.w &&
      my > this.y && my < this.y + this.h
    ) {
      powerOn = !powerOn;
      if (!powerOn) {
        for (let btn of buttons) {
          btn.turnOff();
        }
      }
    }
  }
}
