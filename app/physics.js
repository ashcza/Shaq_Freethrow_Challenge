import Matter from 'matter-js';

export default class PhysicsWrapper {
  constructor() {
    this.Engine = Matter.Engine;
    this.Render = Matter.Render;
    this.World = Matter.World;
    this.Bodies = Matter.Bodies;
    this.Matter = Matter;
    // create an engine
    this.engine = this.Engine.create();
    this.engine.world.gravity.y = 1;

    // create a renderer
    this.render = this.Render.create({
      element: document.body,
      engine: this.engine
    });

    // run the renderer
    // this.Render.run(this.render);
  }

  step () {
    //step forward the physics engine
    this.Engine.update(this.engine);
  }

  draw () {
  }

}
