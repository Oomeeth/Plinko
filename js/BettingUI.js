var betInfoText;

function InitializeBettingUI(app, balance) {
    var betArea = new PIXI.Container();

    var betInfo = new PIXI.Graphics();
    betInfo.beginFill(0xFFFFFF);
    betInfo.drawRect((window.innerWidth / 2) - 150, window.innerHeight + 200, 300, 50);
    betInfo.endFill();

    var betInfoStyle = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 16,
        fontStyle: 'italic',
        fontWeight: 'bold'
    });

    betInfoText = new PIXI.Text({
        text: 'Balance: ' + balance,
        betInfoStyle
    });

    betInfoText.x = (window.innerWidth / 2) - 150;
    betInfoText.y =  window.innerHeight + 200;

    betInfoText.anchor.set(-0.4, -0.25);

    /*const decreaseBet = new PIXI.Graphics();
    decreaseBet.beginFill(0x123456);
    decreaseBet.drawRect((window.innerWidth / 2) - 150, window.innerHeight + 200, 50, 50);
    decreaseBet.endFill();

    const decreaseButtonStyle = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 16,
        fontStyle: 'italic',
        fontWeight: 'bold'
    });



    const increaseBet = new PIXI.Graphics();
    increaseBet.beginFill(0x123456);
    increaseBet.drawRect((window.innerWidth / 2) + 150, window.innerHeight + 200, 50, 50);
    increaseBet.endFill();

    const increaseBetStyle = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 16,
        fontStyle: 'italic',
        fontWeight: 'bold'
    });

    const increaseBetText = new PIXI.Text({ text: '+', decreaseButtonStyle });

    increaseBetText.x = (window.innerWidth / 2) - 150;
    increaseBetText.y =  window.innerHeight + 200;

    increaseBetText.anchor.set(-2, -0.25);

    betArea.addChild(decreaseBet);
    betArea.addChild(decreaseButtonText);
    betArea.addChild(increaseBet);
    betArea.addChild(decreaseButtonText);*/

    betArea.addChild(betInfo);
    betArea.addChild(betInfoText);
    app.stage.addChild(betArea);
}

function PlayButton(app)
{
    var playButtonContainer = new PIXI.Container();

            const playButton = new PIXI.Graphics();
            playButton.beginFill(0xFFFFFF);
            playButton.drawCircle(window.innerWidth / 2, window.innerHeight + 100, 50);
            playButton.endFill();

            const playStyle = new PIXI.TextStyle({
                fontFamily: 'Arial',
                fontSize: 16,
                fontStyle: 'italic',
                fontWeight: 'bold'
            });

            const playText = new PIXI.Text({ text: 'Play', playStyle });

            playText.x = window.innerWidth / 2;
            playText.y = window.innerHeight + 100;

            playText.anchor.set(0.5, 0.5);

            playButtonContainer.addChild(playButton);
            playButtonContainer.addChild(playText);
            app.stage.addChild(playButtonContainer);

            playButtonContainer.addChild(playButton);
            playButtonContainer.addChild(playText);
            app.stage.addChild(playButtonContainer);

            return playButton;
}

function UpdateBalanceUI(balance)
{
    betInfoText.text = "Balance: " + balance;
}