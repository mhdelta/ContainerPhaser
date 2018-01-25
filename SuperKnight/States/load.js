var loadState = {
    preload: function() {
        var loadingLabel = game.add.text(80, 150, 'loading...', {
            font: '30px Courier',
            fill: '#ffffff'
        });

        game.load.image('background', './../../assets/maxresdefault.jpg');
        game.load.atlasJSONHash('knight', './../../assets/medieval/Knight/runHash.png', './../../assets/medieval/Knight/runHash.json');
        game.load.image('ground', './../../assets/platform.png');
    },

    create: function() {
        game.state.start('menu');
    }
}