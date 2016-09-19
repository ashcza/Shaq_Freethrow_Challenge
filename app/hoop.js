export default class Hoop {
  constructor(physics) {
    // create backboard and ground

    let pole = physics.Bodies.rectangle(450, 200, 20, 100, {isStatic: true});
    let rim1 = physics.Bodies.rectangle(440, 245, 10, 5, { isStatic: true });
    let rim2 = physics.Bodies.rectangle(398, 245, 3, 5, { isStatic: true });
    let ground = physics.Bodies.rectangle(400, 480, 810, 60, { isStatic: true });
    // add all of the bodies to the world
    physics.World.add(physics.engine.world, [pole, rim1, rim2, ground]);
    this.physics = physics;
    this.ballArray = [];
    this.basketsMade = [];
  }
  removeBasketsMade () {
    this.basketsMade = [];
    this.ballArray = [];
  }
  step () {
    //Checks to see if ball exists
    if (this.ballArray.length > 0) {
    //Checks to see if basket was made

      for (let i = 0; i < this.ballArray.length; i++) {
        if (this.physics.Matter.Bounds.contains(this.ballArray[i].body.bounds, {x: 420, y: 265})) {
          console.log("scored");
          if (!this.basketsMade.includes(this.ballArray[i].body.id)) {
            this.basketsMade.push(this.ballArray[i].body.id);
          }
        }
      }

    }
  }
  draw () {
  }
}
