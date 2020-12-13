## Description
Rapid Rhapsodies is based on a popular arcade game called "Grand Piano Keys." It is a hand-eye coordination game where you play the "piano keys" that correlate to the music notes on your screen. There is no rhythm; you must try to get through each song as quickly and accurately as possible before the timer runs out.

You can checkout Rapid Rhapsodies using [this link](https://jared-greenberg.github.io/rapid_rhapsodies)!  

![menu photo](../visuals/menu_photo.png?raw=true)

## Features
You may choose between 3 classic piano tunes (Ode to Joy, Minuet in G, and Fur Elise). As you play each row correctly, you hear the next note from your selected song. If you make any mistakes such as hitting extra keys, missing notes, or not pressing note combinations simultaneously, you will hear a bang on the piano and experience a 2.5 second delay. There are also 3 levels of difficulty to choose from. As you go from Beginner to Intermediate to Virtuoso, you will have a larger possible combination of notes to play at the same time. The music notes are produced randomly, so each time you play will be a different experience.

![game play](../visuals/game_play.mov?raw=true)

## Technology
The bulk of the application, which was intended to be very light weight is rendered using HTML5 and SCSS, and is manipulated using purely JavaScript. More specifically, the game board is drawn and animated using the HTML Canvas API. The sound effects are buffered and played using JavaScript's Web Audio API, and they are all sourced from mp3 files that I designed on GarageBand. The game logic is taken care of via Object Oriented Programming and all bundled together using Webpack.

## Challenges
### User Input
Due to the nature of "keydown" events, occurring one at a time, it became challenging when I allowed for simultaneous combinations of keys in the game. In order to accurately parse player moves, I used Lodash's debouncing method to allow for the processing of multiple "keydown" events within a short time. Through testing, I found that an interval of 40ms was the perfect number that allowed for accuracy without accidentally validating some false inputs.

### Audio Buffering
After I chose to create the sound effects myself on GarageBand, I started working with `<audio>` tags until I realized that it was difficult to have overlapping sounds, especially if a song had the same note/mp3 appearing twice in a row. I found some good resources within JavaScript's Web Audio API where I could efficiently load each note into its own buffer source node so that each source could be a separate version of the same file (if needed). I even built functionality into my NotePlayer class that once a buffer was played, the next node would be immediately loaded to remove some of the playback latency that I had previously experienced.

### Comparing Expected and Received Input
The comparison between the user's input and what was expected was getting a bit lengthy as I found myself iterating over two arrays and comparing corresponding values. I ultimately decided to parse both the received and expected input as integers so I could use binary operations. This allowed for shorter code and a constant time comparison. It also was an easier way to program error information on the canvas element when a user makes a mistake.

## Todos
- Add a small backend to save high scores
- Add volume control beyond the game menu

