var game = new Phaser.Game(1000, 1000, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

var bot;
var bot2;
var imagen_voladora;
var speed = 7;
var toRight = true;

function preload() {
    game.load.image('img', './assets/img.png');
    game.load.atlasJSONHash('bot', './../assets/running_bot.png', './../assets/running_bot.json');
    game.load.atlasJSONHash('bot2', './../assets/running_bot.png', './../assets/running_bot.json');
    game.load.image('background', './../assets/PNG_backgrounds/background.png');

}

function create() {

    game.add.tileSprite(0, 0, 1920, 1920, 'background');

    imagen_voladora = game.add.sprite(400, 200, 'img');


    //  This sprite is using a texture atlas for all of its animation data
    bot = game.add.sprite(890, 600, 'bot');
    bot2 = game.add.sprite(40, 600, 'bot2');

    //  Here we add a new animation called 'run'
    //  We haven't specified any frames because it's using every frame in the texture atlas
    bot.animations.add('run');
    bot2.animations.add('run');

    //  And this starts the animation playing by using its key ("run")
    //  15 is the frame rate (15fps)
    //  true means it will loop when it finishes
    bot.animations.play('run', 15, true);
    bot2.animations.play('run', 15, true);


}

function update() {
    // bot.x -= 4;
    // if(bot.x < 0)
    // {
    //     bot.x = +800;
    // }
    // Sprite debug info

    // Check key states every frame.
    // Move ONLY one of the left and right key is hold.


    if (toRight) {
        imagen_voladora.x += 7;
    }
    if (!toRight) {
        imagen_voladora.x -= 7;
    }

    if (imagen_voladora.x >= 600 || imagen_voladora.x <= 0) {
        toRight = !toRight;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
        bot.x -= speed;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
        bot.x += speed;
    }
    game.debug.spriteInfo(bot, 32, 32);
    if (game.input.keyboard.isDown(Phaser.Keyboard.A)) {
        bot2.x -= speed;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.D)) {
        bot2.x += speed;
    }
    game.debug.spriteInfo(bot2, 400, 32);
}