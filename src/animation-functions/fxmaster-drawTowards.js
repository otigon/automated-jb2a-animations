function drawSpecialToward(effect, tok1, tok2) {
    const origin = {
      x: tok1.center.x,
      y: tok1.center.y
    }
    const effectData = mergeObject(effect, {
      position: {
        x: origin.x,
        y: origin.y
      }
    });
    //const target = {
    //  x: tok2.center.x,
    //  y: tok2.center.y
    //}
    //console.log(tok2.center.x);
    //console.log(tok2.center.y);
    // Compute angle
    //const deltaX = target.x - origin.x
    //const deltaY = target.y - origin.y


    //effectData.rotation = Math.atan2(deltaY, deltaX)

    let ray = new Ray (tok1.center, tok2.center);
    effectData.distance = ray.distance;
    effectData.rotation = ray.angle;

    //effectData.distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY) - (1 - effectData.anchor.x) * tok2.width * canvas.grid.size;

    // Throw effect locally
    canvas.fxmaster.playVideo(effectData);
    // And to other clients
    game.socket.emit('module.fxmaster', effectData);
  }

  export default drawSpecialToward;
