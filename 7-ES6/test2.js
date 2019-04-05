function queensAttack(n, k, r_q, c_q, obstacles) {

    let counter = 0; // Need to add Diagonals

    // find the closest obstacle - UP ROW
    function findClosestRowUp(arr, row_q, col_q) {
        let closestRow = 1e5 + 1;
        let flag = false;
    
        for (let i = 0; i < arr.length; i++) {
            myRow = obstacles[i][0];
            myColumn = obstacles[i][1];
            if (myColumn === col_q) {
                // Rows Down
                if (myRow > row_q && (myRow - row_q < closestRow)) {
                    closestRow = myRow - row_q;
                    flag = true;
                }
            }
        }
        if (flag === false) return (n - row_q );     
        return(closestRow - 1);        
    }

    // find the closest obstacle - LEFT COL
    function findClosestColLeft(arr, row_q, col_q) {
        let closestCol = 1e5 + 1;
        let flag = false;
    
        for (let i = 0; i < arr.length; i++) {
            myRow = obstacles[i][0];
            myColumn = obstacles[i][1];
            if (myRow === row_q) {
                // Rows Down
                if (myColumn > col_q && (myColumn - col_q < closestCol)) {
                    closestCol = myColumn - col_q;
                    flag = true;
                }
            }
        }
        if (flag === false) return (n - col_q );     
        return(closestCol - 1);     
    }

    // find the closest obstacle - DOWN ROW
    function findClosestRowDown(arr, row_q, col_q) {
        let closestRow = 0;
        let flag = false;
    
        for (let i = 0; i < arr.length; i++) {
            myRow = obstacles[i][0];
            myColumn = obstacles[i][1];
            if (myColumn === col_q) {
                // Rows Down
                if (myRow < row_q && (row_q - myRow > closestRow)) {
                    closestRow = row_q - myRow;
                    flag = true;
                }
            }
        }
        if (flag === false) return (n - row_q );     
        return(closestRow - 1); 
    }

    // find the closest obstacle - RIGHT COL
    function findClosestColRight(arr, row_q, col_q) {
        let closestCol = 0;
        let flag = false;
    
        for (let i = 0; i < arr.length; i++) {
            myRow = obstacles[i][0];
            myColumn = obstacles[i][1];
            if (myRow === row_q) {
                // Rows Down
                if (col_q > myColumn && (col_q - myColumn > closestCol)) {
                    closestCol = col_q - myColumn;
                    flag = true;
                }
            }
        }
        if (flag === false) return (n - col_q );     
        return(closestCol - 1);   
    }

    // Find Closest Obstacles clockwise
    counter += findClosestRowUp(obstacles, r_q, c_q);
    counter += findClosestColLeft(obstacles, r_q, c_q);
    counter += findClosestRowDown(obstacles, r_q, c_q);
    counter += findClosestColRight(obstacles, r_q, c_q);  
    
    return counter;
    
}

// queensAttack(5,0,3,3,[]);
// queensAttack(5,3,3,3,[[5,5],[4,2],[2,3],[3,5]]);
// console.log(queensAttack(15,4,3,3,[[5,3],[4,3],[1,3],[2,3]]));
console.log(queensAttack(15,1,8,8,[[9,8],[9,9],[8,9],[7,9],[7,8],[7,7],[8,7],[9,7]])); // 0
console.log(queensAttack(15,1,8,8,[[9,9],[7,9],[7,7],[9,7]])); // 0
//console.log(queensAttack(5,3,4,3,[[5,5],[4,2],[2,3]])); // 10
//console.log(queensAttack(100000,0,4187,5068,[]));

//console.log(queensAttack(5,3,4,3,[[5,5],[4,2],[2,3]])); // 4
//console.log(queensAttack(6,3,4,3,[[6,3],[5,3],[2,3],[3,3]])); // 4
console.log(queensAttack(5,3,4,3,[[5,5],[4,2],[2,3]])); // 4


