const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25, block26, block27, block28, block29, block30, block31, block32;
var polyGon, slingShot;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    block1 = new Block(480,345);
    block2 = new Block(520,345);
    block3 = new Block(560,345);
    block4 = new Block(600,345);
    block5 = new Block(640,345);
    block6 = new Block(680,345);
    block7 = new Block(720,345);
    block8 = new Block(520,310);
    block9 = new Block(560,310);
    block10 = new Block(600,310);
    block11 = new Block(640,310);
    block12 = new Block(680,310);
    block13 = new Block(600,275);
    block14 = new Block(640,275);
    block15 = new Block(560,275);
    block16 = new Block(600,240);
    block17 = new Block(830,215);
    block18 = new Block(870,215);
    block19 = new Block(910,215);
    block20 = new Block(950,215);
    block21 = new Block(990,215);
    block22 = new Block(1030,215);
    block23 = new Block(1070,215);
    block24 = new Block(870,180);
    block25 = new Block(910,180);
    block26 = new Block(950,180);
    block27 = new Block(990,180);
    block28 = new Block(1030,180);
    block29 = new Block(990,145);
    block30 = new Block(950,30);
    block31 = new Block(910,115);
    block32 = new Block(950,110);

    log1 = new Log(600,380);
    log2 =  new Log(950,250);
    
    polyGon = new Hexagon(200,50, 50);

    slingshot = new SlingShot(polyGon.body,{x:200, y:400});
}

function draw(){
    background(225);
    Engine.update(engine);
    strokeWeight(4);

    ground.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();    
    block32.display();
    
    log1.display();
    log2.display();

    polyGon.display();

    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(polyGon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}