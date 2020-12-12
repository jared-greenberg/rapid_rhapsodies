import Songs from './songs';

class SoundEffect {

  constructor(audioCtx, fileName) {
    this.audioCtx = audioCtx;
    this.fileName = fileName;
    this.loadSound(fileName)
  }

  loadSound(fileName){
    this.source = this.audioCtx.createBufferSource();
     fetch(`./src/assets/notes/${fileName}.mp3`)
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => this.audioCtx.decodeAudioData(arrayBuffer))
      .then(buffer => {
        this.source.buffer = buffer;
        this.source.connect(this.audioCtx.destination);
      } )
  }

  playSound(){
    this.source.start();
    this.loadSound(this.fileName)
  }

}


class NotePlayer extends SoundEffect {
  
  constructor(audioCtx, songTitle){
    super(audioCtx, Songs[songTitle][0]);

    this.length = Songs[songTitle].length;
    this.songTitle = songTitle;
    this.position = 0;
  }

  playSound(){
    this.source.start();

    if (++this.position < this.length){
      this.loadSound(Songs[this.songTitle][this.position]);
    }
  }

}



export {SoundEffect, NotePlayer};

