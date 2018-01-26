var game = new Phaser.Game(1280, 600, Phaser.AUTO, 'Superknight');

game.global = {
    // enterKey : game.input.keyboard.addKey(Phaser.Keyboard.SPACE)
}


game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('win', winState);

game.state.start('boot');