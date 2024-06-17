function Pathfinding(nodeGrid) {
    var predeterminedPath = [];
    var currentNode;
    var row = nodeGrid.length - 1;

    do {
        if (predeterminedPath.length === 0) {
            let randomColumn;
            var randomWinningValue = Math.random();

            //10
            if (randomWinningValue >= 0.9 && randomWinningValue <= 1) {
                randomColumn = Math.floor(Math.random() * (8 - 7) + 7);
            }
            //5
            else if (randomWinningValue >= 0.8 && randomWinningValue < 0.9) {
                randomColumn = Math.floor(Math.random() * (6 - 5) + 5);
            }
            //2
            else if (randomWinningValue >= 0.6 && randomWinningValue < 0.8) {
                randomColumn = Math.floor(Math.random() * (4 - 3) + 3);
            }
            //1
            else if (randomWinningValue >= 0.2 && randomWinningValue < 0.6) {
                randomColumn = Math.floor(Math.random() * (2 - 1) + 1);
            }
            //0
            else {
                randomColumn = 0;
            }

            currentNode = nodeGrid[row][randomColumn];
            predeterminedPath.push(currentNode);
            --row;
        } else {
            let randomNeighborIndex = Math.floor(Math.random() * (currentNode.neighbors.length - 1));
            currentNode = nodeGrid[currentNode.neighbors[randomNeighborIndex].yIndex][currentNode.neighbors[randomNeighborIndex].xIndex];
            predeterminedPath.push(currentNode);
            --row;
        }
    } while (currentNode.neighbors != null);

    return predeterminedPath;
}