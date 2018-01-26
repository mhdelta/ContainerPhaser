var playState = {

    create: function () {

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
        knight.animations.add('Attack', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15, true);
        knight.animations.add('Die', [10, 11, 12, 13, 14, 15, 16, 17, 18], 15, false);
        knight.animations.add('jump', [20, 21, 22, 23, 24, 25, 26, 27], 15, true);
        knight.animations.add('Run', [29, 30, 31, 32, 33, 34, 35, 36], 7, true);
        knight.animations.add('stand', [40, 41, 42, 43, 44], 8, true);

        //  And this starts the animation playing by using its key ("run")
        //  15 is the frame rate (15fps)
        //  trsue means it will loop when it finishes


        cursors = game.input.keyboard.createCursorKeys();

    },

    update: function () {

        knight.body.velocity.x = 0;

        hitplatform = game.physics.arcade.collide(knight, platforms);

        if (cursors.right.isDown) {

            knight.body.velocity.x = 150;
            knight.scale.setTo(0.3, 0.3);
            knight.animations.play('Run');
        } else if (cursors.left.isDown) {

            knight.body.velocity.x = -150;
            knight.scale.setTo(-0.3, 0.3);

            knight.animations.play('Run', 15);
        } else {
            knight.animations.play('stand');
        }
        if (cursors.up.isDown && knight.body.touching.down && hitplatform) {

            knight.animations.stop('Run');
            knight.animations.play('jump');
            knight.body.velocity.y = -400;

        }
        if (knight.body.x > 800) {
            game.state.start('win');
        }

        if(cursors.SPACE.isDown){
            console.log("Press space");
        }

        game.debug.spriteInfo(knight, 32, 32);
        // game.debug.body(knight);
    },

    Win: function () {
        game.state.start('win');
    }
}