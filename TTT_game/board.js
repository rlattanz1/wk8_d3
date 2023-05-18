
class Board {

    constructor(n) {
        this.board = [];
        for(let i = 0; i < n; i++) {
            this.board.push([]);
        }
    };

    getPosition(pos) {
        const r = pos[0];
        const c = pos[1];
        this.board[r][c];
    };

    setPosition(mark, pos) {
        const r = pos[0];
        const c = pos[1];
        this.board[r][c] = mark;
    };
};




b = new Board(4)
console.log(b)
console.log(b.setPosition('x', [1, 2]))
