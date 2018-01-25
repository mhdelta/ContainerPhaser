var menuState = {
    create: function() {


        var nameLabel = game.add.text(80, 80, 'Superknight The game', {
            font: '50px Arial',
            fill: '#ffffff'
        });

        var startLabel = game.add.text(80, game.world.height - 80, 'Press ENTER to start', {
            font: '25px Arial',
            fill: '#ffffff'
        });

        var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER)

        enterKey.onDown.addOnce(function(){
        	game.state.start('play');
        });
    },

    start: function() {
        game.state.start('play');
    }
}