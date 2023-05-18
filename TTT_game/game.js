
class Game {

    constructor(n=3) {
        this.board = new Board(n);
        this.player1 = new Player('X')
        this.player2 = new Player('O')
        this.currentPlayer = this.player1
    };

    switchPlayer() {
        if (this.currentPlayer === this.player1) {
            this.currentPlayer = this.player2;
        } else {
            this.currentPlayer = this.player1;
        }
    };

    playGame() {
        
    };
};
