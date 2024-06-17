var audio = new Audio();

function InitializeAudio(audioSrc)
{
	audio.src = audioSrc;
}

function PlayMusic(app, musicVolume) {
    var musicButtonContainer = new PIXI.Container();

    const musicButton = new PIXI.Graphics();
    musicButton.beginFill(0xFFFFFF);
    musicButton.drawRect(50, 50, 100, 50);
    musicButton.endFill();

    const musicStyle = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 5,
        fontStyle: 'italic',
        fontWeight: 'bold'
    });


    const musicText = new PIXI.Text({
        text: 'Music',
        musicStyle
    });
    musicText.x = 100;
    musicText.y = 100;
    musicText.anchor.set(0.5, 1.25);

    musicButtonContainer.addChild(musicButton);
    musicButtonContainer.addChild(musicText);
    app.stage.addChild(musicButtonContainer);

    musicButton.on('pointerdown', (event) => {
        audio.volume = musicVolume;
        audio.loop = true;

        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
    musicButton.eventMode = 'static';
}