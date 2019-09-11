const Engine = Matter.Engine;
const Render = Matter.Render;
const  World = Matter.World;
const   Bodies = Matter.Bodies;

var box1,ball1,ball2,ground
     
var engine = Engine.create();
 
var render = Render.create({
                element: document.body,
                engine: engine,
                options: {
                    width: 800,
                    height: 400,
                    wireframes: false
                }
             });
              
box1 = Bodies.rectangle(400, 200, 80, 80);
 ball1 = Bodies.circle(380, 100, 40, 10);
 ball2= Bodies.circle(460, 10, 40, 10);
ground = Bodies.rectangle(400, 380, 810, 60, { isStatic: true });
 
World.add(engine.world, [box1, ball1, ball2, ground]);
 
Engine.run(engine);
Render.run(render);