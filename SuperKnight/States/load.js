var loadState = {
    preload: function() {
        var loadingLabel = game.add.text(80, 150, 'loading...', {
            font: '30px Courier',
            fill: '#ffffff'
        });

        game.load.image('background', './../../assets/maxresdefault.jpg');
        game.load.atlasJSONHash('knight', './../../assets/medieval/Knight/nightHash.png', './../../assets/medieval/Knight/nightHash.json');
        game.load.image('ground', './../../assets/platform.png');
    },

    create: function() {
        game.state.start('menu');
    }
}