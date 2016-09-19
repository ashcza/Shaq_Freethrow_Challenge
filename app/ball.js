import createjs from 'createjs-collection';
import Matter from 'matter-js';

export default class Ball {
  constructor(stage, force, physics) {
    // adds the ball to the physics engine (x, y, radius)
    this.physics = physics;
    // this.body = physics.Bodies.circle(85, 290, 10);

    this.body = physics.Bodies.circle(85, 290, 10, {
      render: {
        sprite: {
          texture: "images/ball.png",
          xScale: 2,
          yScale: 2
        }
      }
    });


    physics.World.add(physics.engine.world, [this.body]);
    this.addForce(force, -.01);
    this.body.restitution = .84;


    let myGraphics = new createjs.Graphics().beginFill("#e68a00").drawCircle(0, 0, 10);
    this.shape = stage.addChild(new createjs.Shape()).set({graphics:myGraphics, x:100, y:100});
    this.stage = stage;
  }

  addForce(dx, dy) {
    this.physics.Matter.Body.applyForce(this.body, this.body.position, {x: dx, y: dy});
  }

  removeBall() {
    this.stage.removeChildAt(this.stage.children.length - 1);
    Matter.World.remove(this.physics.engine.world, this.physics.engine.world.bodies[this.physics.engine.world.bodies.length - 1]);
  }

  step() {
  }

  draw() {

    this.shape.x = this.body.position.x;
    this.shape.y = this.body.position.y;
  }
}
