// Creates each row of the board
class Move {

  constructor(level){
    this.row = Move.createRow(level) 
  }

  static createRow(level){
    const row = Array(5).fill(0)
    const indices = [0, 1, 2, 3, 4];
    
    // shuffle using Fisher-Yates
    for (let i = 0; i < indices.length; i++){
      let j = Math.floor(Math.random() * (indices.length - i) + i);
      [indices[i], indices[j]] = [indices[j], indices[i]]
    }

    indices.slice(0, level).forEach(idx => row[idx] = 1)
    return row;
  }

}

export default Move;