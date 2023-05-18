
class Player {

        reader = require('readline').createInterface({

        input: process.stdin,
        output: process.stdout
    });

    constructor(mark) {
        this.mark = mark
    };

    getPosition() {
        reader.question("input a valid row and column that exists on the board", pos => {
            
        })

    };
};
