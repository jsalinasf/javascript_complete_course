function queensAttack(n, k, r_q, c_q, obstacles) {
    
    function resetBoard(board) {
        for (let i = 0; i < n; i++) {
            board.push([0]);
            for (let j = 0; j < n; j++) {
                board[i][j] = 0;
            }
        }
    }

    function printBoard(board) {
        
        for (let i = n -1; i >= 0; i--) {
            let line = '';
            for (let j = 0; j < n; j++) {
                line += board[i][j];
                line += ' ';
            }
            console.log(line);
        }
    }

    function setQueenPos(board,row,col) {
        board[row][col] = 2;
    }

    function setObstaclesPos(board, obstacles) {
        for (let i = 0; i < obstacles.length; i++) {
            let row = obstacles[i][0] - 1;
            let col = obstacles[i][1] - 1;
            board[row][col] = 1;
        }
    }

    function checkRowsUp() {
        for (let i = r_q; i < n; i++) {
            if (board[i][c_q - 1] != 1) {
                counter ++;
                // console.log('UP','Row:',i,'Col:',c_q - 1,'Element:',board[i][c_q - 1])
            } else {
                break;
            }
        }
    }

    function checkRowsDown() {
        for (let i = r_q - 2; i >= 0; i--) {
            if (board[i][c_q - 1] != 1) {
                counter ++;
                // console.log('DOWN','Row:',i,'Col:',c_q - 1,'Element:',board[i][c_q - 1])
            } else {
                break;
            }
        }
    }

    function checkColumnsRight() {
        for (let i = c_q; i < n; i++) {
            if (board[r_q -1][i] != 1) {
                counter ++;
                // console.log('RIGHT','Row:',r_q - 1,'Col:',i,'Element:',board[r_q - 1][i])
            } else {
                break;
            }
        }
    }

    function checkColumnsLeft() {
        for (let i = c_q - 2; i >= 0; i--) {
            if (board[r_q -1][i] != 1) {
                counter ++;
                // console.log('LEFT','Row:',r_q - 1,'Col:',i,'Element:',board[r_q - 1][i])
            } else {
                break;
            }
        }
    }

    function checkDiagRightUp(){
        let i = r_q;
        let j = c_q;
        while (i < n && j < n) {
            if (board[i][j] != 1) {
                counter ++;
                // console.log('Diag RIGHT Up','Row:',i,'Col:',j,'Element:',board[i][j])
                i++;
                j++;
            } else {
                break;
            }
        }
    }

    function checkDiagRightDown(){
        let i = r_q - 2;
        let j = c_q;
        while (i >= 0 && j < n) {
            if (board[i][j] != 1) {
                counter ++;
                // console.log('Diag RIGHT Down','Row:',i,'Col:',j,'Element:',board[i][j])
                i--;
                j++;
            } else {
                break;
            }
        }
    }

    function checkDiagLeftUp(){
        let i = r_q;
        let j = c_q - 2;
        while (i < n && j >= 0) {
            if (board[i][j] != 1) {
                counter ++;
                // console.log('Diag LEFT Up','Row:',i,'Col:',j,'Element:',board[i][j])
                i++;
                j--;
            } else {
                break;
            }
        }
    }

    function checkDiagLeftDown(){
        let i = r_q - 2;
        let j = c_q - 2;
        while (i >= 0 && j >= 0) {
            if (board[i][j] != 1) {
                counter ++;
                // console.log('Diag LEFT Down','Row:',i,'Col:',j,'Element:',board[i][j])
                i--;
                j--;
            } else {
                break;
            }
        }
    }

    function checkAttack() {
        checkRowsUp();
        checkRowsDown();
        checkColumnsRight();
        checkColumnsLeft();
        checkDiagRightUp();
        checkDiagRightDown();
        checkDiagLeftUp();
        checkDiagLeftDown();
    }

    let board = [];
    let counter = 0;
    resetBoard(board);
    setQueenPos(board,r_q - 1, c_q - 1);
    setObstaclesPos(board,obstacles);
    checkAttack();
    // console.log('\n');
    // printBoard(board);
    return counter;
    
}

// queensAttack(5,0,3,3,[]);
// queensAttack(5,3,3,3,[[5,5],[4,2],[2,3]]);
// console.log(queensAttack(15,4,3,3,[[5,3],[4,3],[1,3],[2,3]]));
//console.log(queensAttack(15,1,8,8,[[7,7],[9,7],[8,7],[9,8],[9,9],[8,9],[7,9],[7,8]])); // 0
//console.log(queensAttack(5,3,4,3,[[5,5],[4,2],[2,3]])); // 10
console.log(queensAttack(100000,0,4187,5068,[])); // 

// console.log(queensAttack(5,3,4,3,[[5,5],[4,2],[2,3]])); // 4

