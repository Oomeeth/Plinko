function ConstructGrid(pegSize) {

    let rowNodes = [];

    let columnNodes = [];

    //This value ensures that pegs are center aligned
    let xOffset = (window.innerWidth / 2);
    //Ensures 200px space between each row
    let yOffset = 200;

    //Row 0
    //Column 0
    columnNodes.push({
        x: xOffset,
        y: yOffset,
        neighbors: null,
        column: 0,
        row: 0
    })
    rowNodes.push(columnNodes);
    columnNodes = [];


    //Row 1
    //Column 0
    columnNodes.push({
        x: (pegSize * -3) + xOffset,
        y: (pegSize * 6) + yOffset,
        neighbors: [{
            xIndex: 0,
            yIndex: 0
        }],
        column: 0,
        row: 1
    });
    //Column 1
    columnNodes.push({
        x: (pegSize * 3) + xOffset,
        y: (pegSize * 6) + yOffset,
        neighbors: [{
            xIndex: 0,
            yIndex: 0
        }],
        column: 1,
        row: 1
    });
    rowNodes.push(columnNodes);
    columnNodes = [];


    //Row 2
    //Column 0
    columnNodes.push({
        x: xOffset,
        y: (pegSize * 12) + yOffset,
        neighbors: [{
            xIndex: 0,
            yIndex: 1
        }, {
            xIndex: 1,
            yIndex: 1
        }],
        column: 0,
        row: 2
    });
    //Column 1
    columnNodes.push({
        x: (pegSize * -6) + xOffset,
        y: (pegSize * 12) + yOffset,
        neighbors: [{
            xIndex: 0,
            yIndex: 1
        }],
        column: 1,
        row: 2
    });
    //Column 2
    columnNodes.push({
        x: (pegSize * 6) + xOffset,
        y: (pegSize * 12) + yOffset,
        neighbors: [{
            xIndex: 1,
            yIndex: 1
        }],
        column: 2,
        row: 2
    });
    rowNodes.push(columnNodes);
    columnNodes = [];


    //Row 3
    //Column 0
    columnNodes.push({
        x: (pegSize * -3) + xOffset,
        y: (pegSize * 18) + yOffset,
        neighbors: [{
            xIndex: 0,
            yIndex: 2
        }, {
            xIndex: 1,
            yIndex: 2
        }],
        column: 0,
        row: 3
    });
    //Column 1
    columnNodes.push({
        x: (pegSize * 3) + xOffset,
        y: (pegSize * 18) + yOffset,
        neighbors: [{
            xIndex: 0,
            yIndex: 2
        }, {
            xIndex: 2,
            yIndex: 2
        }],
        column: 1,
        row: 3
    });
    //Column 2
    columnNodes.push({
        x: (pegSize * -9) + xOffset,
        y: (pegSize * 18) + yOffset,
        neighbors: [{
            xIndex: 1,
            yIndex: 2
        }],
        column: 2,
        row: 3
    });
    //Column 3
    columnNodes.push({
        x: (pegSize * 9) + xOffset,
        y: (pegSize * 18) + yOffset,
        neighbors: [{
            xIndex: 2,
            yIndex: 2
        }],
        column: 3,
        row: 3
    });
    rowNodes.push(columnNodes);
    columnNodes = [];


    //Row 4
    //Column 0
    columnNodes.push({
        x: xOffset,
        y: (pegSize * 24) + yOffset,
        neighbors: [{
            xIndex: 0,
            yIndex: 3
        }, {
            xIndex: 1,
            yIndex: 3
        }],
        column: 0,
        row: 4
    });
    //Column 1
    columnNodes.push({
        x: (pegSize * -6) + xOffset,
        y: (pegSize * 24) + yOffset,
        neighbors: [{
            xIndex: 0,
            yIndex: 3
        }, {
            xIndex: 2,
            yIndex: 3
        }],
        column: 1,
        row: 4
    });
    //Column 2
    columnNodes.push({
        x: (pegSize * 6) + xOffset,
        y: (pegSize * 24) + yOffset,
        neighbors: [{
            xIndex: 1,
            yIndex: 3
        }, {
            xIndex: 3,
            yIndex: 3
        }],
        column: 2,
        row: 4
    });
    //Column 3
    columnNodes.push({
        x: (pegSize * -12) + xOffset,
        y: (pegSize * 24) + yOffset,
        neighbors: [{
            xIndex: 2,
            yIndex: 3
        }],
        column: 3,
        row: 4
    });
    //Column 4
    columnNodes.push({
        x: (pegSize * 12) + xOffset,
        y: (pegSize * 24) + yOffset,
        neighbors: [{
            xIndex: 3,
            yIndex: 3
        }],
        column: 4,
        row: 4
    });
    rowNodes.push(columnNodes);
    columnNodes = [];


    //Row 5
    //Column 0
    columnNodes.push({
        x: (pegSize * -3) + xOffset,
        y: (pegSize * 30) + yOffset,
        neighbors: [{
            xIndex: 1,
            yIndex: 4
        }, {
            xIndex: 0,
            yIndex: 4
        }],
        column: 0,
        row: 5
    });
    //Column 1
    columnNodes.push({
        x: (pegSize * 3) + xOffset,
        y: (pegSize * 30) + yOffset,
        neighbors: [{
            xIndex: 0,
            yIndex: 4
        }, {
            xIndex: 2,
            yIndex: 4
        }],
        column: 1,
        row: 5
    });
    //Column 2
    columnNodes.push({
        x: (pegSize * -9) + xOffset,
        y: (pegSize * 30) + yOffset,
        neighbors: [{
            xIndex: 3,
            yIndex: 4
        }, {
            xIndex: 1,
            yIndex: 4
        }],
        column: 2,
        row: 5
    });
    //Column 3
    columnNodes.push({
        x: (pegSize * 9) + xOffset,
        y: (pegSize * 30) + yOffset,
        neighbors: [{
            xIndex: 2,
            yIndex: 4
        }, {
            xIndex: 4,
            yIndex: 4
        }],
        column: 3,
        row: 5
    });
    //Column 4
    columnNodes.push({
        x: (pegSize * -15) + xOffset,
        y: (pegSize * 30) + yOffset,
        neighbors: [{
            xIndex: 3,
            yIndex: 4
        }],
        column: 4,
        row: 5
    });
    //Column 5
    columnNodes.push({
        x: (pegSize * 15) + xOffset,
        y: (pegSize * 30) + yOffset,
        neighbors: [{
            xIndex: 4,
            yIndex: 4
        }],
        column: 5,
        row: 5
    });
    rowNodes.push(columnNodes);
    columnNodes = [];


    //Row 6
    //Column 0
    columnNodes.push({
        x: xOffset,
        y: (pegSize * 36) + yOffset,
        neighbors: [{
            xIndex: 0,
            yIndex: 5
        }, {
            xIndex: 1,
            yIndex: 5
        }],
        column: 0,
        row: 6
    });
    //Column 1
    columnNodes.push({
        x: (pegSize * -6) + xOffset,
        y: (pegSize * 36) + yOffset,
        neighbors: [{
            xIndex: 0,
            yIndex: 5
        }, {
            xIndex: 2,
            yIndex: 5
        }],
        column: 1,
        row: 6
    });
    //Column 2
    columnNodes.push({
        x: (pegSize * 6) + xOffset,
        y: (pegSize * 36) + yOffset,
        neighbors: [{
            xIndex: 1,
            yIndex: 5
        }, {
            xIndex: 3,
            yIndex: 5
        }],
        column: 2,
        row: 6
    });
    //Column 3
    columnNodes.push({
        x: (pegSize * -12) + xOffset,
        y: (pegSize * 36) + yOffset,
        neighbors: [{
            xIndex: 2,
            yIndex: 5
        }],
        column: 3,
        row: 6
    });
    //Column 4
    columnNodes.push({
        x: (pegSize * 12) + xOffset,
        y: (pegSize * 36) + yOffset,
        neighbors: [{
            xIndex: 3,
            yIndex: 5
        }, {
            xIndex: 5,
            yIndex: 5
        }],
        column: 4,
        row: 6
    });
    //Column 5
    columnNodes.push({
        x: (pegSize * -18) + xOffset,
        y: (pegSize * 36) + yOffset,
        neighbors: [{
            xIndex: 4,
            yIndex: 5
        }],
        column: 5,
        row: 6
    });
    //Column 6
    columnNodes.push({
        x: (pegSize * 18) + xOffset,
        y: (pegSize * 36) + yOffset,
        neighbors: [{
            xIndex: 5,
            yIndex: 5
        }],
        column: 6,
        row: 6
    });
    rowNodes.push(columnNodes);
    columnNodes = [];


    //Row 7
    //Column 0
    columnNodes.push({
        x: (pegSize * -3) + xOffset,
        y: (pegSize * 42) + yOffset,
        neighbors: [{
            xIndex: 0,
            yIndex: 6
        }, {
            xIndex: 1,
            yIndex: 6
        }],
        column: 0,
        row: 7
    });
    //Column 1
    columnNodes.push({
        x: (pegSize * 3) + xOffset,
        y: (pegSize * 42) + yOffset,
        neighbors: [{
            xIndex: 0,
            yIndex: 6
        }, {
            xIndex: 2,
            yIndex: 6
        }],
        column: 1,
        row: 7
    });
    //Column 2
    columnNodes.push({
        x: (pegSize * -9) + xOffset,
        y: (pegSize * 42) + yOffset,
        neighbors: [{
            xIndex: 1,
            yIndex: 6
        }, {
            xIndex: 3,
            yIndex: 6
        }],
        column: 2,
        row: 7
    });
    //Column 3
    columnNodes.push({
        x: (pegSize * 9) + xOffset,
        y: (pegSize * 42) + yOffset,
        neighbors: [{
            xIndex: 2,
            yIndex: 6
        }, {
            xIndex: 4,
            yIndex: 6
        }],
        column: 3,
        row: 7
    });
    //Column 4
    columnNodes.push({
        x: (pegSize * -15) + xOffset,
        y: (pegSize * 42) + yOffset,
        neighbors: [{
            xIndex: 3,
            yIndex: 6
        }, {
            xIndex: 5,
            yIndex: 6
        }],
        column: 4,
        row: 7
    });
    //Column 5
    columnNodes.push({
        x: (pegSize * 15) + xOffset,
        y: (pegSize * 42) + yOffset,
        neighbors: [{
            xIndex: 4,
            yIndex: 6
        }, {
            xIndex: 6,
            yIndex: 6
        }],
        column: 5,
        row: 7
    });
    //Column 6
    columnNodes.push({
        x: (pegSize * -21) + xOffset,
        y: (pegSize * 42) + yOffset,
        neighbors: [{
            xIndex: 5,
            yIndex: 6
        }],
        column: 6,
        row: 7
    });
    //Column 7
    columnNodes.push({
        x: (pegSize * 21) + xOffset,
        y: (pegSize * 42) + yOffset,
        neighbors: [{
            xIndex: 6,
            yIndex: 6
        }],
        column: 7,
        row: 7
    });
    rowNodes.push(columnNodes);
    columnNodes = [];

    //Row 8
    //Column 0
    columnNodes.push({
        x: xOffset,
        y: (pegSize * 48) + yOffset,
        neighbors: [{
            xIndex: 0,
            yIndex: 7
        }, {
            xIndex: 1,
            yIndex: 7
        }],
        column: 0,
        row: 8
    });
    //Column 1
    columnNodes.push({
        x: (pegSize * -6) + xOffset,
        y: (pegSize * 48) + yOffset,
        neighbors: [{
            xIndex: 0,
            yIndex: 7
        }, {
            xIndex: 2,
            yIndex: 7
        }],
        column: 1,
        row: 8
    });
    //Column 2
    columnNodes.push({
        x: (pegSize * 6) + xOffset,
        y: (pegSize * 48) + yOffset,
        neighbors: [{
            xIndex: 1,
            yIndex: 7
        }, {
            xIndex: 3,
            yIndex: 7
        }],
        column: 2,
        row: 8
    });
    //Column 3
    columnNodes.push({
        x: (pegSize * -12) + xOffset,
        y: (pegSize * 48) + yOffset,
        neighbors: [{
            xIndex: 2,
            yIndex: 7
        }, {
            xIndex: 4,
            yIndex: 7
        }],
        column: 3,
        row: 8
    });
    //Column 4
    columnNodes.push({
        x: (pegSize * 12) + xOffset,
        y: (pegSize * 48) + yOffset,
        neighbors: [{
            xIndex: 3,
            yIndex: 7
        }, {
            xIndex: 5,
            yIndex: 7
        }],
        column: 4,
        row: 8
    });
    //Column 5
    columnNodes.push({
        x: (pegSize * -18) + xOffset,
        y: (pegSize * 48) + yOffset,
        neighbors: [{
            xIndex: 4,
            yIndex: 7
        }, {
            xIndex: 6,
            yIndex: 7
        }],
        column: 5,
        row: 8
    });
    //Column 6
    columnNodes.push({
        x: (pegSize * 18) + xOffset,
        y: (pegSize * 48) + yOffset,
        neighbors: [{
            xIndex: 5,
            yIndex: 7
        }, {
            xIndex: 7,
            yIndex: 7
        }],
        column: 6,
        row: 8
    });
    //Column 7
    columnNodes.push({
        x: (pegSize * -24) + xOffset,
        y: (pegSize * 48) + yOffset,
        neighbors: [{
            xIndex: 6,
            yIndex: 7
        }],
        column: 7,
        row: 8
    });
    //Column 8
    columnNodes.push({
        x: (pegSize * 24) + xOffset,
        y: (pegSize * 48) + yOffset,
        neighbors: [{
            xIndex: 7,
            yIndex: 7
        }],
        column: 8,
        row: 8
    });
    rowNodes.push(columnNodes);
    columnNodes = [];

    //Row 9
    //Column 0
    columnNodes.push({
        x: (pegSize * -3) + xOffset,
        y: (pegSize * 54) + yOffset,
        neighbors: [{
            xIndex: 0,
            yIndex: 8
        }, {
            xIndex: 1,
            yIndex: 8
        }],
        column: 0,
        row: 9
    });
    //Column 1
    columnNodes.push({
        x: (pegSize * 3) + xOffset,
        y: (pegSize * 54) + yOffset,
        neighbors: [{
            xIndex: 0,
            yIndex: 8
        }, {
            xIndex: 2,
            yIndex: 8
        }],
        column: 1,
        row: 9
    });
    //Column 2
    columnNodes.push({
        x: (pegSize * -9) + xOffset,
        y: (pegSize * 54) + yOffset,
        neighbors: [{
            xIndex: 1,
            yIndex: 8
        }, {
            xIndex: 3,
            yIndex: 8
        }],
        column: 2,
        row: 9
    });
    //Column 3
    columnNodes.push({
        x: (pegSize * 9) + xOffset,
        y: (pegSize * 54) + yOffset,
        neighbors: [{
            xIndex: 2,
            yIndex: 8
        }, {
            xIndex: 4,
            yIndex: 8
        }],
        column: 3,
        row: 9
    });
    //Column 4
    columnNodes.push({
        x: (pegSize * -15) + xOffset,
        y: (pegSize * 54) + yOffset,
        neighbors: [{
            xIndex: 3,
            yIndex: 8
        }, {
            xIndex: 5,
            yIndex: 8
        }],
        column: 4,
        row: 9
    });
    //Column 5
    columnNodes.push({
        x: (pegSize * 15) + xOffset,
        y: (pegSize * 54) + yOffset,
        neighbors: [{
            xIndex: 4,
            yIndex: 8
        }, {
            xIndex: 6,
            yIndex: 8
        }],
        column: 5,
        row: 9
    });
    //Column 6
    columnNodes.push({
        x: (pegSize * -21) + xOffset,
        y: (pegSize * 54) + yOffset,
        neighbors: [{
            xIndex: 5,
            yIndex: 8
        }, {
            xIndex: 7,
            yIndex: 8
        }],
        column: 6,
        row: 9
    });
    //Column 7
    columnNodes.push({
        x: (pegSize * 21) + xOffset,
        y: (pegSize * 54) + yOffset,
        neighbors: [{
            xIndex: 6,
            yIndex: 8
        }, {
            xIndex: 8,
            yIndex: 8
        }],
        column: 7,
        row: 9
    });
    //Column 8
    columnNodes.push({
        x: (pegSize * -27) + xOffset,
        y: (pegSize * 54) + yOffset,
        neighbors: [{
            xIndex: 7,
            yIndex: 8
        }],
        column: 8,
        row: 9
    });
    //Column 9
    columnNodes.push({
        x: (pegSize * 27) + xOffset,
        y: (pegSize * 54) + yOffset,
        neighbors: [{
            xIndex: 8,
            yIndex: 8
        }],
        column: 9,
        row: 9
    });
    rowNodes.push(columnNodes);
    columnNodes = [];

    //Row 10
    //Column 0
    columnNodes.push({
        x: xOffset,
        y: (pegSize * 60) + yOffset,
        neighbors: [{
            xIndex: 0,
            yIndex: 9
        }, {
            xIndex: 1,
            yIndex: 9
        }],
        column: 0,
        row: 10,
        win: 0
    });
    //Column 1
    columnNodes.push({
        x: (pegSize * -6) + xOffset,
        y: (pegSize * 60) + yOffset,
        neighbors: [{
            xIndex: 0,
            yIndex: 9
        }, {
            xIndex: 2,
            yIndex: 9
        }],
        column: 1,
        row: 10,
        win: 1
    });
    //Column 2
    columnNodes.push({
        x: (pegSize * 6) + xOffset,
        y: (pegSize * 60) + yOffset,
        neighbors: [{
            xIndex: 1,
            yIndex: 9
        }, {
            xIndex: 3,
            yIndex: 9
        }],
        column: 2,
        row: 10,
        win: 1
    });
    //Column 3
    columnNodes.push({
        x: (pegSize * -12) + xOffset,
        y: (pegSize * 60) + yOffset,
        neighbors: [{
            xIndex: 2,
            yIndex: 9
        }, {
            xIndex: 4,
            yIndex: 9
        }],
        column: 3,
        row: 10,
        win: 2
    });
    //Column 4
    columnNodes.push({
        x: (pegSize * 12) + xOffset,
        y: (pegSize * 60) + yOffset,
        neighbors: [{
            xIndex: 3,
            yIndex: 9
        }, {
            xIndex: 5,
            yIndex: 9
        }],
        column: 4,
        row: 10,
        win: 2
    });
    //Column 5
    columnNodes.push({
        x: (pegSize * -18) + xOffset,
        y: (pegSize * 60) + yOffset,
        neighbors: [{
            xIndex: 4,
            yIndex: 9
        }, {
            xIndex: 6,
            yIndex: 9
        }],
        column: 5,
        row: 10,
        win: 5
    });
    //Column 6
    columnNodes.push({
        x: (pegSize * 18) + xOffset,
        y: (pegSize * 60) + yOffset,
        neighbors: [{
            xIndex: 5,
            yIndex: 9
        }, {
            xIndex: 7,
            yIndex: 9
        }],
        column: 6,
        row: 10,
        win: 5
    });
    //Column 7
    columnNodes.push({
        x: (pegSize * -24) + xOffset,
        y: (pegSize * 60) + yOffset,
        neighbors: [{
            xIndex: 6,
            yIndex: 9
        }, {
            xIndex: 8,
            yIndex: 9
        }],
        column: 9,
        row: 10,
        win: 10
    });
    //Column 8
    columnNodes.push({
        x: (pegSize * 24) + xOffset,
        y: (pegSize * 60) + yOffset,
        neighbors: [{
            xIndex: 7,
            yIndex: 9
        }, {
            xIndex: 9,
            yIndex: 9
        }],
        column: 8,
        row: 10,
        win: 10
    });
    rowNodes.push(columnNodes);
    columnNodes = [];

    return rowNodes;
}