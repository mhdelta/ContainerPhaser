var game = new Phaser.Game(1280, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

var knight;
var imagen_voladora;
var speed = 5;
var ground;
var toRight = true;
var cursors;
var ground;
var hitplatform;


function preload() {
    game.load.image('background', './../assets/maxresdefault.jpg');
    game.load.atlasJSONHash('knight', './../assets/medieval/Knight/runHash.png', './../assets/medieval/Knight/runHash.json');
    game.load.image('ground', './../assets/platform.png');

}

function create() {


    game.physics.startSystem(Phaser.Physics.ARCADE);

    //Back
    game.add.sprite(0, 0, 'background');

    //Ground

    platforms = game.add.group();

    platforms.enableBody = true;

    ground = platforms.create(0, game.world.height - 2);

    ground.body.immovable = true;
    ground.scale.setTo(50, 2);



    //  This sprite is using a texture atlas for all of its animation data
    knight = game.add.sprite(20, 0, 'knight');

    //Physics
    game.physics.arcade.enable(knight);
    knight.body.gravity.y = 800;
    knight.body.collideWorldBounds = true;

    knight.anchor.setTo(0.5, 0.5);
    knight.scale.setTo(0.3, 0.3);

    knight.body.setSize(210, 210, 160, 200);
    // // knight.anchor.setTo(0.5, 0.5);

    //  Here we add a new animation called 'run'
    //  We haven't specified any frames because it's using every frame in the texture atlas
    // knight.animations.add('stand', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10, true);
    // knight.animations.add('jump', [10, 11, 12, 13, 14, 15, 16, 17, 18], 10, true);
    // knight.animations.add('run', [19, 20, 21, 22, 23, 24, 25, 26], 15);
    knight.animations.add('jump', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15, true);
    knight.animations.add('run', [10, 11, 12, 13, 14, 15, 16, 17, 18], 15, true);
    knight.animations.add('stand', [20, 21, 22, 23, 24, 25, 26], 8, true);

    //  And this starts the animation playing by using its key ("run")
    //  15 is the frame rate (15fps)
    //  trsue means it will loop when it finishes
    // knight.animations.play('stand', 11, true);

    cursors = game.input.keyboard.createCursorKeys();

}

function update() {

    // Check key states every frame.
    // Move ONLY one of the left and right key is hold.

    knight.body.velocity.x = 0;

    hitplatform = game.physics.arcade.collide(knight, platforms);


    if (cursors.right.isDown) {
        knight.body.velocity.x = 150;
        knight.scale.setTo(0.3, 0.3);
        // knight.animations.stop('stand');
        knight.animations.play('run');
    } else if (cursors.left.isDown) {
        knight.body.velocity.x = -150;
        knight.scale.setTo(-0.3, 0.3);
        // knight.animations.stop('stand');
        knight.animations.play('run', 15);
    } else {
        knight.animations.play('stand');
    }
    if (cursors.up.isDown && knight.body.touching.down && hitplatform) {
        knight.body.velocity.y = -400;
        knight.animations.play('jump');
    }


    game.debug.spriteInfo(knight, 32, 32);
    // game.debug.body(knight);
}