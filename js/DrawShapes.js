function DrawPegs(nodeGrid, app, pegSize) {

    //Iterate through each row
    for (var nodeRow = (nodeGrid.length - 1); nodeRow >= 0; --nodeRow) {

        //Iterate through each column
        for (var nodeColumn = 0; nodeColumn < nodeGrid[nodeRow].length; ++nodeColumn) {
            var container = new PIXI.Container();

            //Draw the winning baskets/slots
            if (nodeRow == (nodeGrid.length - 1)) {
                const slot = new PIXI.Graphics();
                slot.beginFill(0xBF40BF);
                slot.drawRect(nodeGrid[nodeRow][nodeColumn].x - 20, nodeGrid[nodeRow][nodeColumn].y - 20, 40, 20);
                slot.endFill();

                //Winning values for baskets
                const style = new PIXI.TextStyle({
                    fontFamily: 'Arial',
                    fontSize: 16,
                    fontStyle: 'italic',
                    fontWeight: 'bold'
                });

                const score = new PIXI.Text({
                    text: nodeGrid[nodeRow][nodeColumn].win,
                    style
                });

                score.x = nodeGrid[nodeRow][nodeColumn].x;
                score.y = nodeGrid[nodeRow][nodeColumn].y;

                //Centralize
                score.anchor.set(0.5, 1);

                container.addChild(slot);
                container.addChild(score);
                app.stage.addChild(container);
            }
            //Draw the pegs
            else {
                const peg = new PIXI.Graphics();
                peg.beginFill(0xBF40BF);
                peg.drawCircle(nodeGrid[nodeRow][nodeColumn].x, nodeGrid[nodeRow][nodeColumn].y, pegSize);
                peg.endFill();
                container.addChild(peg);
                app.stage.addChild(container);
            }
        }
    }
}

function DrawBall(ballSize, app) {
    var ball = new PIXI.Graphics();
    ball.beginFill(0x00FFFF);
    ball.drawCircle(0, 0, ballSize);
    ball.endFill();
    app.stage.addChild(ball);

    ball.x = window.innerWidth / 2;
    ball.y = ballSize + 100;

    return ball;
}

function InitialPeg(ballSize, app) {
    var initialPeg = new PIXI.Graphics();
    initialPeg.beginFill(0x123456);
    initialPeg.drawCircle(window.innerWidth / 2, 100, ballSize);
    initialPeg.endFill();
    app.stage.addChild(initialPeg);
}