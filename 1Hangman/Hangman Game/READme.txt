"Hangmanmain.html" is the real game file.

When adding the game files to the website:

	Separate all the games into their own folders
	
	Under the "header" div class, write:
		
	<div class="container">
		<div class="game">
           	 <a href="themaingamehtmlfile"><img src="images/hang1.jpg" alt="Game 1"></a> //my image is called hang1 in the "images" folder
          	  <p>Game 1</p>
        </div>
	
// Description: This is a hangman game; a game where the player has to guess the correct word in under 6 tries using the hints given to them, themed around climate change. Its goal is to teach about climate change and its effects. 

// How to play: To win, guess the correct word or phrase that the game has picked at random. The game will give a hint while showing the word count to help the player answer correctly. The player must use the letters displayed to enter the word, using the wrong letters will start to draw a hanging stick figure. After 6 wrong guesses the game will end in a loss for the player because the hanging stick figure has been fully drawn. 
