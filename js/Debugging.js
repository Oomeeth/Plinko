function ShowNeighbors(nodeGrid, app) {
    for (let nodeRow = (nodeGrid.length - 1); nodeRow >= 0; --nodeRow) {
        for (let nodeColumn = 0; nodeColumn < nodeGrid[nodeRow].length; ++nodeColumn) {
            if (nodeGrid[nodeRow][nodeColumn].neighbors === null) {
                continue;
            }

            for (let neighboringNodes = 0; neighboringNodes < nodeGrid[nodeRow][nodeColumn].neighbors.length; ++neighboringNodes) {
                let neighborX = nodeGrid[nodeRow][nodeColumn].neighbors[neighboringNodes].xIndex;
                let neighborY = nodeGrid[nodeRow][nodeColumn].neighbors[neighboringNodes].yIndex;

                let line = new PIXI.Graphics();
                line.moveTo(nodeGrid[nodeRow][nodeColumn].x, nodeGrid[nodeRow][nodeColumn].y);
                line.lineTo(nodeGrid[neighborY][neighborX].x, nodeGrid[neighborY][neighborX].y);
                line.fill(0xff3300);
                line.stroke({
                    width: 4,
                    color: 0xffd900
                });

                app.stage.addChild(line);
            }
        }
    }
}

function ShowPathConstruction(predeterminedPath, app) {
    for (var pathNode = 0; pathNode < (predeterminedPath.length - 1); ++pathNode) {
        var t = predeterminedPath[pathNode];
        var u = predeterminedPath[pathNode + 1];
        let line = new PIXI.Graphics();
        line.moveTo(predeterminedPath[pathNode].x, predeterminedPath[pathNode].y);
        line.lineTo(predeterminedPath[pathNode + 1].x, predeterminedPath[pathNode + 1].y);
        line.fill(0xff3300);
        line.stroke({
            width: 4,
            color: 0xffd900
        });
        app.stage.addChild(line);
    }
}