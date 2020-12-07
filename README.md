### Background and Overview
Rapid Rhapsodies is a single-player coordination and reflex game that involves pressing "piano keys" in the correct combination, much like Guitar Hero and Dance Dance Revolution. There is no rhythm; you must try to get through each song as quickly and accurately as possible before the time runs out.

### Functionality and MVP
1. User Input  
- Pick between 3 songs to play (Ode to Joy, Minuet in G, Fur Elise)
- Choose the level of difficulty (easy, medium, or hard)  

The Game frame will:
- Have 5 possible keys each assigned to a letter on the keyboard
- Be randomly populated with combinations of keys to press
- Display the number of correct presses as well as the time left
- Play a note on each correct key press

### Wireframes
The game will have two screens. The splash will display the game's logo and let the user choose the song and level of difficulty. Once confirmed, the user will be taken to the game frame. An instructions drop down will be visible on both screens. Quitting the game or finishing a round will bring the user back to the splash to play again.

![splash](https://github.com/jared-greenberg/rapid_rhapsodies/tree/main/src/assets/splash.png)  
![gameframe](https://github.com/jared_greenberg/rapid_rhapsodies/tree/main/src/assets/game_frame.png)


## Architecture and Technology
The game logic will be handled exclusively in Javascript. The game frame will be rendered with a mix of HTML and Canvas. In particular, the static piano keys will be implemented solely with HTML and the moving board will be implemented using Canvas. I will provide the files for piano notes/sound effects. Songs will be implemented as an array of note names that correspond to audio files. Ultimately, I would like to use the Web Audio API to help avoid sound latency, but I've been having some issues with it and might simply use audio html tags.

## Implementation Timeline
Day 1:
- Create the Javascript logic for the game play (including timer and score)
- Link the audio files to the project  
Day 2:
- Create the piano keys
- Create the game board
Day 3: 
- Gameboard animation (scrolling, rendering time, score, and mistakes)
- Add/test sound effects
Day 4: 
- Add menu for user to choose song/level
- Debug
Day 5:
- Create instructions and personal links
- Final touches


## Bonus Features
 - Save high score
 - Eventually maybe a separate mode to create your own song to play



