var level;
var score;
var radio_one, tv_one, tv_three, iphone_one, iphone_two, iphone_three, macbook_one;
var x;
var y;

function preload() {
    //sprite - radio_one
    radio_one = createSprite(0, 0);
    radio_one.addAnimation("buzz", "assets/radio_one_0001.png", "assets/radio_one_0004.png");
    radio_one.velocity.x = 2;
    radio_one.velocity.y = 3.3;
    radio_one.mouseActive = true;
    //sprite - tv_one
    tv_one = createSprite(0, 0);
    tv_one.addAnimation("flashing", "assets/tv_one_0001.png", "assets/tv_one_0004.png");
    tv_one.velocity.x = 2.5;
    tv_one.velocity.y = 4;
    tv_one.mouseActive = true;
    //sprite - tv_three
    tv_three = createSprite(0, 0);
    tv_three.addAnimation("umm", "assets/tv_three_0001.png", "assets/tv_three_0004.png");
    tv_three.velocity.x = 1.7;
    tv_three.velocity.y = 4;
    tv_three.mouseActive = true;
    //sprite - iphone_one
    iphone_one = createSprite(0, 0);
    iphone_one.addAnimation("homescreen", "assets/iphone_one_0001.png", "assets/iphone_one_0007.png");
    iphone_one.velocity.x = 1;
    iphone_one.velocity.y = 3;
    iphone_one.mouseActive = true;
    //sprite - iphone_two
    iphone_two = createSprite(0, 0);
    iphone_two.addAnimation("texting", "assets/iphone_two_0001.png", "assets/iphone_two_0002.png");
    iphone_two.velocity.x = 2;
    iphone_two.velocity.y = 5.5;
    iphone_two.mouseActive = true;
    //sprite - iphone_three
    iphone_three = createSprite(0, 0);
    iphone_three.addAnimation("calling", "assets/iphone_three_0001.png", "assets/iphone_three_0002.png");
    iphone_three.velocity.x = 5;
    iphone_three.velocity.y = 3;
    iphone_three.mouseActive = true;
    //sprite - macbook_one
    macbook_one = createSprite(0, 0);
    macbook_one.addAnimation("google", "assets/macbook_one_0001.png", "assets/macbook_one_0002.png");
    macbook_one.velocity.x = 6;
    macbook_one.velocity.y = 4.5;
    macbook_one.mouseActive = true;
}

function setup() {
    createCanvas(800, 400);
    level = 0;
    score = 1;
}

function draw() {
    //start screen
    if (level == 0) {
        background(0, 0, 0, 100);
        noStroke();
        fill(255, 255, 255, 100);
        text("s o l u s", mouseX - 50, mouseY + 50);
        fill(161, 177, 204, 100);
        rect(350, 300, 100, 50);
        fill(255, 255, 255, 150);
        text("B E G I N", 375, 329);
        if (mouseIsPressed && mouseX > 350 && mouseX < 450 && mouseY > 300 && mouseY < 350) {
            level = 1;
        }
    }
    //level 1 - intro
    if (level == 1) {
        background(0, 0, 0, 100);
        noStroke();
        fill(255, 100);
        text("solipsism", 50, 70);
        text("the belief that the only existence one can be certain of is their own,", 50, 120);
        text("that you can only trust your own perceptions because there is no way of knowing if the external world actually exists", 50, 135);
        text("i see you but are you really there this could be a  h a l l u c i n a t i o n  but maybe you are really there but how do i know that", 50, 180);
        text("what i see is what is how do i know that the words you speak arise from cognitive processes and consciousness not just my ", 50, 195);
        text("brain imagining you talking or how do i know that you're not a robot just programmed to respond this way how do i know", 50, 210);
        fill(161, 177, 204, 100);
        rect(620, 300, 100, 50);
        noStroke();
        fill(255, 255, 255, 100);
        text("N E X T", 650, 330);
        if (mouseIsPressed && mouseX > 620 && mouseX < 720 && mouseY > 300 && mouseY < 350) {
            level = 2;
        }
    }
    //level 2 - how to play
    if (level == 2) {
        background(255, 255, 255);
        noStroke();
        fill(167, 178, 198);
        text("how to play:", 50, 70);
        text("achieve pure solipsism by earning 100 points.", 50, 150);
        text("reject all attempts at external communication to gain points. click on the object to  T U R N  I T  O F F.", 50, 170);
        text("as you gain more points, the difficulty level will increase.", 50, 190);
        text("failure to reject correctly will result in lost points.", 50, 240);
        fill(161, 177, 204, 100);
        rect(350, 300, 100, 50);
        fill(255, 255, 255, 200);
        text("S T A R T", 375, 329);
        if (mouseIsPressed && mouseX > 350 && mouseX < 450 && mouseY > 300 && mouseY < 350) {
            level = 3;
        }
    }
    //level 3 - level 1 of the actual game, easy
    if (level == 3) {
        frameRate(40);
        background(255);
        fill(10, 10, 10, 100);
        text("points", 730, 50);
        text(score, 705, 50);
        text("level 1", 50, 50);
        //these sprites are invisible in this level
        radio_one.visible = false;
        iphone_two.visible = false;
        iphone_three.visible = false;
        tv_one.visible = false;
        tv_three.visible = false;
        macbook_one.visible = false;
        drawSprites();
        //this sprite is the only one falling in this level
        //falling iphone_one
        if (iphone_one.overlapPoint(mouseX, mouseY) && mouseIsPressed) {
            iphone_one.position.x = random(0, 400);
            iphone_one.position.y = 0;
            score = score + 1;
        }
        if (iphone_one.position.y >= height) {
            iphone_one.position.x = random(0, 400);
            iphone_one.position.y = 0;
            score = score - 1;
        }
        //level up once you have 10 points
        if (score == 10) {
            level = 4;
        }
        drawSprites();
    }
    //level 4 - level 2 of the actual game, medium level
    if (level == 4) {
        frameRate(40);
        background(255);
        fill(10, 10, 10, 100);
        text("points", 730, 50);
        text(score, 705, 50);
        text("level 2", 50, 50);
        //
        //these sprites are invisible in this level
        radio_one.visible = false;
        iphone_two.visible = false;
        iphone_three.visible = false;
        tv_one.visible = false;
        tv_three.visible = true;
        macbook_one.visible = true;
        //these sprites are visible in this level
        //falling iphone_one
        if (iphone_one.overlapPoint(mouseX, mouseY) && mouseIsPressed) {
            iphone_one.position.x = random(0, 400);
            iphone_one.position.y = 0;
            score = score + 1;
        }
        if (iphone_one.position.y >= height) {
            iphone_one.position.x = random(0, 400);
            iphone_one.position.y = 0;
            score = score - 1;
        }
        //falling tv_three
        if (tv_three.overlapPoint(mouseX, mouseY) && mouseIsPressed) {
            tv_three.position.x = random(0, 400);
            tv_three.position.y = 0;
            score = score + 1;
        }
        if (tv_three.position.y >= height) {
            tv_three.position.x = random(0, 400);
            tv_three.position.y = 0;
            score = score - 1;
        }
        //falling macbook_one
        if (macbook_one.overlapPoint(mouseX, mouseY) && mouseIsPressed) {
            macbook_one.position.x = random(0, 400);
            macbook_one.position.y = 0;
            score = score + 1;
        }
        if (macbook_one.position.y >= height) {
            macbook_one.position.x = random(0, 400);
            macbook_one.position.y = 0;
            score = score - 1;
        }
        //level up at 40 points
        if (score == 40) {
            level = 5;
        }
        drawSprites();
    }
    //
    //
    //level 5 - level 3 of the actual game 
    if (level == 5) {
        frameRate(40);
        background(255);
        fill(10, 10, 10, 100);
        text("points", 730, 50);
        text(score, 705, 50);
        text("level 3", 50, 50);
        drawSprites();
        //
        radio_one.visible = true;
        iphone_two.visible = true;
        iphone_three.visible = true;
        tv_one.visible = true;
        //falling sprites
        //falling radio_one
        if (radio_one.overlapPoint(mouseX, mouseY) && mouseIsPressed) {
            radio_one.position.x = random(0, 400);
            radio_one.position.y = 0;
            score = score + 1;
        }
        if (radio_one.position.y >= height) {
            radio_one.position.x = random(0, 400);
            radio_one.position.y = 0;
            score = score - 1;
        }
        //falling tv_one        
        if (tv_one.overlapPoint(mouseX, mouseY) && mouseIsPressed) {
            tv_one.position.x = random(0, 400);
            tv_one.position.y = 0;
            score = score + 1;
        }
        if (tv_one.position.y >= height) {
            tv_one.position.x = random(0, 400);
            tv_one.position.y = 0;
            score = score - 1;
        }
        //falling tv_three
        if (tv_three.overlapPoint(mouseX, mouseY) && mouseIsPressed) {
            tv_three.position.x = random(0, 400);
            tv_three.position.y = 0;
            score = score + 1;
        }
        if (tv_three.position.y >= height) {
            tv_three.position.x = random(0, 400);
            tv_three.position.y = 0;
            score = score - 1;
        }
        //falling iphone_one
        if (iphone_one.overlapPoint(mouseX, mouseY) && mouseIsPressed) {
            iphone_one.position.x = random(0, 400);
            iphone_one.position.y = 0;
            score = score + 1;
        }
        if (iphone_one.position.y >= height) {
            iphone_one.position.x = random(0, 400);
            iphone_one.position.y = 0;
            score = score - 1;
        }
        //falling iphone_two
        if (iphone_two.overlapPoint(mouseX, mouseY) && mouseIsPressed) {
            iphone_two.position.x = random(0, 400);
            iphone_two.position.y = 0;
            score = score + 1;
        }
        if (iphone_two.position.y >= height) {
            iphone_two.position.x = random(0, 400);
            iphone_two.position.y = 0;
            score = score - 1;
        }
        //falling iphone_three
        if (iphone_three.overlapPoint(mouseX, mouseY) && mouseIsPressed) {
            iphone_three.position.x = random(0, 400);
            iphone_three.position.y = 0;
            score = score + 1;
        }
        if (iphone_three.position.y >= height) {
            iphone_three.position.x = random(0, 400);
            iphone_three.position.y = 0;
            score = score - 1;
        }
        //falling macbook_one
        if (macbook_one.overlapPoint(mouseX, mouseY) && mouseIsPressed) {
            macbook_one.position.x = random(0, 400);
            macbook_one.position.y = 0;
            score = score + 1;
        }
        if (macbook_one.position.y >= height) {
            macbook_one.position.x = random(0, 400);
            macbook_one.position.y = 0;
            score = score - 1;
        }
        if (score == 100) {
            level = 6;
        }
        drawSprites();
    }
    if (level == 6) {
        frameRate(40);
        background(255);
        noStroke();
        fill(10, 10, 10, 100);
        text("look at you, rejecting all of that outside communication!", 50, 70);
        text("congratulations. you've achieved solipsism. enjoy your solus!", 50, 90);
        fill(161, 177, 204, 100);
        rect(300, 300, 200, 50);
        fill(255, 180);
        text(" P L A Y   A G A I N  ", 345, 330);
        if (mouseIsPressed && mouseX > 300 && mouseX < 500 && mouseY > 300 && mouseY < 350) {
            level = 0
        }
    }
}
