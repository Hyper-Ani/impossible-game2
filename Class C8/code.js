var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var w1 = createSprite(190, 120, 250, 3);
var w2 = createSprite(190, 260, 250, 3);
var w3 = createSprite(66, 143, 3, 50);
var w4 = createSprite(66, 234, 3, 50);
var w5 = createSprite(314, 143, 3, 50);
var w6 = createSprite(314, 236, 3, 50);
var w7 = createSprite(43, 168, 50, 3);
var w8 = createSprite(43, 206, 50, 3);
var w9 = createSprite(337, 168, 50, 3);
var w10 = createSprite(337, 210, 50, 3);
var w11 = createSprite(18, 186, 3, 40);
var w12 = createSprite(358, 186, 3, 40);


var player = createSprite(42, 187, 15, 15);
player.shapeColor = "green";

var o1 = createSprite(104, 135, 15, 15);
o1.shapeColor = "red";
var o2 = createSprite(154, 240, 15, 15);
o2.shapeColor = "red";
var o3 = createSprite(204, 135, 15, 15);
o3.shapeColor = "red";
var o4 = createSprite(254, 240, 15, 15);
o4.shapeColor = "red";

o1.velocityY = 6;
o2.velocityY = -6;
o3.velocityY = 6;
o4.velocityY = -6;

var Deaths = 0;





playSound("assets/category_background/progression.mp3", false);


function draw() {
  background("skyblue");
  textSize(20);
  
  text("Deaths:"+Deaths, 156, 80);
  
  
  createEdgeSprites();
  o1.bounceOff(w1);
  o1.bounceOff(w2);
  o2.bounceOff(w1);
  o2.bounceOff(w2);
  o3.bounceOff(w1);
  o3.bounceOff(w2);
  o4.bounceOff(w1);
  o4.bounceOff(w2);
  player.bounceOff(w11);
  player.bounceOff(w12);
 if (keyDown(LEFT_ARROW)) {
   player.x = player.x-4;
 }
 if (keyDown(RIGHT_ARROW)) {
   player.x = player.x+4;
 }
 if (player.isTouching(o1) || player.isTouching(o2) || player.isTouching(o3)  || player.isTouching(o4)) {
   player.x = 42;
   player.y = 187;
   Deaths++;
 }   
   drawSprites(); 
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
