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

    const randomNum = Math.floor(Math.random() * level + 1);

    indices.slice(0, randomNum).forEach(idx => row[idx] = 1)
    return row;
  }

  drawRow(ctx, y){
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.strokeRect(75, y, 350, 88);
    ctx.strokeRect(75, y, 70, 88);
    ctx.strokeRect(145, y, 70, 88);
    ctx.strokeRect(215, y, 70, 88);
    ctx.strokeRect(285, y, 70, 88);
    ctx.strokeRect(355, y, 70, 88);
    ctx.stroke();
    
    this.drawMusicNotes(ctx, y);
  }

  drawMusicNotes(ctx, y){
    const colors = ['red', 'orange', 'gold', 'green', 'blue']
    this.row.forEach((slot, i) => {
      if (slot === 1) {
        const startX = i * 70 + 109.5;
        const startY = y + 55
        ctx.arc(startX, startY, 11, 0, Math.PI * 2);
        ctx.fillStyle = colors[i];
        ctx.fill();
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "white";
        ctx.arc(startX, startY, 8, 3 * Math.PI / 2, 0);
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = colors[i];
        ctx.moveTo(startX + 10, startY);
        ctx.lineTo(startX + 10, startY - 30);
        ctx.stroke();
        ctx.closePath();
      }
    })
  }

}

export default Move;