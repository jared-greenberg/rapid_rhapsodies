// Creates each row of the board
class Move {

  constructor(level, ctx){
    this.row = Move.createRow(level);
    this.ctx = ctx;
    this.blue = document.getElementById("blue")
    this.pos = 0;
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

  drawRow(y){
    this.ctx.beginPath();
    this.ctx.save();
    this.ctx.fillStyle = "#51514D";
    this.ctx.strokeStyle = "black";
    this.ctx.fillRect(75, y, 350, 88);
    this.ctx.strokeRect(75, y, 70, 88);
    this.ctx.strokeRect(145, y, 70, 88);
    this.ctx.strokeRect(215, y, 70, 88);
    this.ctx.strokeRect(285, y, 70, 88);
    this.ctx.strokeRect(355, y, 70, 88);
    this.ctx.restore();
    this.drawMusicNotes(y);
  }

  // drawMusicNotes(y){
   
  //   this.ctx.drawImage(this.blue, (this.pos % 17) * 72, 0, 70, 70, 75, y, 70, 70)
  //   this.pos++;
  //   setTimeout(()=>{
  //     this.ctx.clearRect(75, y, 70, 70);
      
  //     requestAnimationFrame(() => this.drawMusicNotes(y));
  //   }, 100)
  // }

  drawMusicNotes(y){
    const colors = ['#33FCFF', '#AF33FF', '#E5FE15', '#FF8D33', '#AFFF33']
    this.row.forEach((slot, i) => {
      if (slot === 1) {
        const startX = i * 70 + 109.5;
        const startY = y + 55
        this.ctx.arc(startX, startY, 11, 0, Math.PI * 2);
        this.ctx.fillStyle = colors[i];
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = "white";
        this.ctx.arc(startX, startY, 8, 3 * Math.PI / 2, 0);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.strokeStyle = colors[i];
        this.ctx.moveTo(startX + 10, startY);
        this.ctx.lineTo(startX + 10, startY - 30);
        this.ctx.stroke();
        this.ctx.closePath();
      }
    })
  }


}

export default Move;