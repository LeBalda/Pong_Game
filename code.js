var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4f76f214-57be-478b-9b9e-86c34e4eaffe","01324db0-cd81-4e77-af4f-96ad46ec9c2f","a9993c6c-6d17-4274-ab70-5ca0db6254d4"],"propsByKey":{"4f76f214-57be-478b-9b9e-86c34e4eaffe":{"name":"Ball","sourceUrl":"assets/api/v1/animation-library/gamelab/JTd581LwNfOIZ0FzKo.ais_jFYPyV4_G/category_sports/volleyball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"JTd581LwNfOIZ0FzKo.ais_jFYPyV4_G","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/JTd581LwNfOIZ0FzKo.ais_jFYPyV4_G/category_sports/volleyball.png"},"01324db0-cd81-4e77-af4f-96ad46ec9c2f":{"name":"ship1","sourceUrl":null,"frameSize":{"x":346,"y":294},"frameCount":1,"looping":true,"frameDelay":12,"version":"YlYckB42V2zIapV6TNQ3o5QsF2PlQF2f","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":346,"y":294},"rootRelativePath":"assets/01324db0-cd81-4e77-af4f-96ad46ec9c2f.png"},"a9993c6c-6d17-4274-ab70-5ca0db6254d4":{"name":"ship2","sourceUrl":"assets/api/v1/animation-library/gamelab/oe91580NRX_lq0_AXmFgzqY7HFhJ5gkQ/category_retro/spacebattle_07.png","frameSize":{"x":380,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"oe91580NRX_lq0_AXmFgzqY7HFhJ5gkQ","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oe91580NRX_lq0_AXmFgzqY7HFhJ5gkQ/category_retro/spacebattle_07.png"}}};
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


var playerPaddle= createSprite(370,200,10,100);
  playerPaddle.shapeColor="blue";
  playerPaddle.setAnimation("ship1");
  playerPaddle.scale = 0.25;
  
var computerPaddle= createSprite(25,200,10,100);
  computerPaddle.shapeColor="red";
  computerPaddle.setAnimation("ship2");
  computerPaddle.scale = 0.2;
  
var ball= createSprite(200,200,10,10);
  ball.shapeColor="yellow";
ball.setAnimation("Ball");
 ball.scale  = 0.1;
 

  
  

function draw() {
background("white");

if (ball.isTouching(playerPaddle) || ball.isTouching(computerPaddle)) {
 playSound("assets/category_projectile/game_ball_bounce.mp3");
   
}


if (keyDown("up")) {
  playerPaddle.y = playerPaddle.y - 10;
}

if (keyDown("down")) {
  playerPaddle.y = playerPaddle.y + 10;
}

if (keyDown("space")) {
  ball.velocityX = 3;
  ball.velocityY = 4;
}

// Dar movimiento de la bola :D
computerPaddle.y = ball.y;

drawNet();
 
 
createEdgeSprites();
ball.bounceOff(topEdge);
ball.bounceOff(bottomEdge);
ball.bounceOff(playerPaddle);
ball.bounceOff(computerPaddle);

if (ball.isTouching(bottomEdge) || ball.isTouching(topEdge)) {
  playSound( "assets/category_digital/bounce_2.mp3");
}


function drawNet() {
  for (num = 0; num< 400; num=num+20) {
    line(200, num, 200, num+10);
   }
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
