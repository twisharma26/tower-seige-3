const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, ground, polygonimage, stand1; //backgroundimg;
var baseblock1, stand2, baseblock2, baseblock3, baseblock4, baseblock5;
var L1block1, L1block2, L1block3, L1block4;
var L2block1, L2block2, L2block3;
var L3block1, L3block2;
var L4block1;
var polygon, slingshot;
var score = 0;
//var bg = "day.jpg"

function preload() {
    //xyz()
    polygonimage = loadImage("polygon.png")
    
}

function setup() {
    createCanvas(1000, 500)

    engine = Engine.create(); 
    world = engine.world;

    ground = new Ground(450, 490, 1100, 20)
    stand1 = new Ground(200, 400, 300, 20)

    //level one (bottom) for stand 1 (left side)
    baseblock1 = new boxes(100, 370, 50, 70)
    baseblock2 = new boxes(150, 370, 50, 70)
    baseblock3 = new boxes(200, 370, 50, 70)
    baseblock4 = new boxes(250, 370, 50, 70)
    baseblock5 = new boxes(300, 370, 50, 70)
    
    //directly above the bottom, left stand
    L1block1 = new boxes(125, 300, 50, 70)
    L1block2 = new boxes(175, 300, 50, 70)
    L1block3 = new boxes(225, 300, 50, 70)
    L1block4 = new boxes(275, 300, 50, 70)

    L2block1 = new boxes(150, 230, 50, 70)
    L2block2 = new boxes(200, 230, 50, 70)
    L2block3 = new boxes(250, 230, 50, 70)

    L3block1 = new boxes(225, 160, 50, 70)
    L3block2 = new boxes(175, 160, 50, 70)

    L4block1 = new boxes(200, 90, 50, 70)

    polygon = Bodies.circle(800, 300, 50)
    World.add(world, polygon)

    slingshot = new constraint(this.polygon, {x: 800, y: 300})
}

function draw() {
    background(0)
    
    Engine.update(engine)
    rectMode(CENTER)

    fill("white")
    text(mouseX+", "+mouseY, mouseX, mouseY)

    textSize(20)
    text("score: "+score, 900, 30)

    ground.display()
    stand1.display()

    fill("pink")
    baseblock1.display()
    baseblock1.score()
    baseblock2.display()
    baseblock2.score()
    baseblock3.display()
    baseblock3.score()
    baseblock4.display()
    baseblock4.score()
    baseblock5.display()
    baseblock5.score()

    fill(181, 126, 220)
    L1block1.display()
    L1block1.score()
    L1block2.display()
    L1block2.score()
    L1block3.display()
    L1block3.score()
    L1block4.display()
    L1block4.score()

    fill("turquoise")
    L2block1.display()
    L2block1.score()
    L2block2.display()
    L2block2.score()
    L2block3.display()
    L2block3.score()

    fill(147, 183, 124)
    L3block2.display()
    L3block1.display()
    L3block2.score()
    L3block1.score()

    fill(255,255,102)
    L4block1.display()
    L4block1.score()

    slingshot.display()

    imageMode(CENTER)
    image(polygonimage, polygon.position.x, polygon.position.y, 40, 40)
}

function mouseDragged() { 
    Matter.Body.setPosition(this.polygon, {x: mouseX, y:mouseY}) 
}

function mouseReleased() {
    slingshot.launch()
}

function keyPressed() {
    if (keyCode === 32) {
        Matter.Body.setPosition(this.polygon, {x: 800, y: 300}) 
        slingshot.attach(this.polygon)
    }
}

/*async function xyz() {
    var link = await fetch("http://worldclockapi.com/api/json/est/now") 
    var forJson = await link.json()
    var data = forJson.currentDateTime
    var hour = data.slice(11, 13)
    console.log(hour)
    if (hour >= 06 && hour <= 18) {
        bg = "day.jpg"
    }
    else {
        bg = "night.jpg"
    }
    backgroundimg = loadImage(bg)
}
*/
