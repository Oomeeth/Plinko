async function LoadBackground(app) {
    await PIXI.Assets.load('images/nightsky.jpg');
    let sprite = PIXI.Sprite.from('images/nightsky.jpg');
    app.stage.addChild(sprite);
}