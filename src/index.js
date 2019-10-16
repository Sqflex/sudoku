module.exports = function solveSudoku(matrix) {
  // your solution
  const fullMaxtrix = [...matrix];
  SudokuSolver(fullMaxtrix);
}

function SudokuSolver(matrix){
  var NonPossiblities = {}, ImpossibleNumbers, emptySpaces = 81;
  while(emptySpaces > 0){
    emptySpaces = 0;
  for (var col =  0; col<matrix.length; col++){
    for(var row = 0; row<matrix.length; row++){

      if(matrix[col][row] === 0){
        NonPossiblities = {};

        for (var i =0; i < 9; i++){
          if(matrix[col][i] > 0){
            NonPossiblities[matrix[col][i]] = true;
          }
          if(matrix[i][row]===0){
            NonPossiblities[matrix[i][row]] = true;
          }
        }

        for(var colBox = Math.floor(col /3) *3; colBox< Math.floor(col/3) * 3 + 3; colBox++){
          for(var rowBox = Math.floor(row /3) *3; rowBox< Math.floor(row/3) * 3 + 3; rowBox++){
            if(matrix[colBox][rowBox]){
              NonPossiblities[matrix[colBox][rowBox]] = true;
            }
          }
        }

        ImpossibleNumbers = Object.keys(NonPossiblities); 
        if(ImpossibleNumbers.length === 8){
          for (var i = 1; i <10; i++){
            if(ImpossibleNumbers.indexOf(i.toString()) < 0){
              matrix[col][row] = i;
            }
          }
        }
        else{
          emptySpaces++;
        }
      }
    }
  }
}
  return matrix;
}