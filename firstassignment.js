/*
Author: Nathan Munro 
Date: 9/17/23
Description: Wheel of fortune
*/
const { error } = require("console")
const fs = require("fs")
const prompt = require("prompt-sync")()
let spun = 0
let endit = 0
let again = 0
let players
let player1
let player2
let player3
let round = 1
var theWord
var word1 
var points
var playerTurn = 1
var free = 0
//gets the dictionary
function getFileLines(filename)
{
    content = fs.readFileSync(filename)
    content = content.toString('UTF8')
    lines = content.split('\n')
    return lines;
}
//Gets the points from spinning the whell
function spinTheWheel()
{
    let randomNumber = Math.floor(Math.random() * (23))
    const wheel = [0, 650, 900, 700, 500, 800, 500, 650, 500, 900, 0, 1000, 500, 900, 700, 600, 8000, 500, 700, 600, 550, 500, 900]
    return wheel[randomNumber]
}
//gets random word from the dictionary
function getRandomWord()
{
    let randomNumber2 = Math.floor(Math.random() * (178691))
    const dictionary = getFileLines('dictionary.txt')
    return dictionary[randomNumber2];
}
//replaces char in hidden string
function replaceChar(oString, rChar, index)
{
    let firstPart = oString.substr(0,index)
    let lastPart = oString.substr(index + 1)
    let newString = firstPart + rChar + lastPart
    return newString;
}
//main function
function main()
{
    //testing to see if game should end
    if(endit == 0)
    {
        console.log('Welcome to CPI310 Fortunate Whell')
        players = prompt('How many players (1 - 3) ? ')
        //sets up game for player turn and then spins
        playerAmmt(players)
        spinning()
    }
    else
    {
        //I added this to stop the game. Could not find another way to do it
        console.log('\n')
        throw new Error()
    }
    
    
}
//checks to see if game has gone through three rounds
function EndGame(s)
{
    //checks to see how many players are playing 
    if(players == 1)
    {
        
        if(s == 4)
        {
            //prints game over and total score
            console.log(players)
            console.log('Game Over!' + '\n' + 'Player one total points: ' + player1.finalScore1)
            endit++
            return main()
        }
        else
        {
            free++
        }
        
    }
    else if(players == 2)
    {
        if(s == 7)
        {
            //prints game over and says who won
            console.log('Game Over!' + '\n' + 'Player one total points: ' + player1.finalScore1)
            console.log('Game Over!' + '\n' + 'Player two total points: ' + player2.finalScore2)
            if(player1.finalScore1 > player2.finalScore2)
            {
                console.log('\n' + 'Player One Wins!')
                endit++
                return main()
            }
            else if(player1.finalScore1 < player2.finalScore2)
            {
                console.log('\n' + 'Player Two Wins!')
                endit++
                return main()
            }
            else
            {
                console.log('\n' + 'Its a draw')
                endit++
                return main()
            }
        }
        else
        {
            free++
        }
    }
    else if(players == 3)
    {
        if(s == 10)
        {
            //prints game over and says who won
            console.log('Game Over!' + '\n' + 'Player one total points: ' + player1.finalScore1)
            console.log('Game Over!' + '\n' + 'Player two total points: ' + player2.finalScore2)
            console.log('Game Over!' + '\n' + 'Player three total points: ' + player3.finalScore3)
            if(player1.finalScore1 > player2.finalScore2 && player1.finalScore1 > player3.finalScore3)
            {
                console.log('\n' + 'Player One Wins!')
                endit++
                return main()
            }
            else if(player1.finalScore1 < player2.finalScore2 && player3.finalScore3 < player2.finalScore2)
            {
                console.log('\n' + 'Player Two Wins!')
                endit++
                return main()
            }
            else if(player1.finalScore1 < player3.finalScore3 && player3.finalScore3 > player2.finalScore2)
            {
                console.log('\n' + 'Player Three Wins!')
                endit++
                return main()
            }
            else if(player1.finalScore1 > player3.finalScore3 && player1.finalScore1 == player2.finalScore2)
            {
                console.log('\n' + 'Its a draw between player one and two')
                endit++
                return main()
            }
            else if(player1.finalScore1 < player3.finalScore3 && player3.finalScore3 == player2.finalScore2)
            {
                console.log('\n' + 'Its a draw between player two and three')
                endit++
                return main()
            }
            else if(player1.finalScore1 == player3.finalScore3 && player3.finalScore3 > player2.finalScore2)
            {
                console.log('\n' + 'Its a draw between player one and three')
                endit++
                return main()
            }
            else if(player1.finalScore1 == player3.finalScore3 && player3.finalScore3 == player2.finalScore2)
            {
                console.log('\n' + 'Its a draw')
                endit++
                return main()
            }
            else
            {
                return ('\n')
            }
        }
        else
        {
            free++
        }
    }
}
function playerAmmt(numOfPlayers)
{
    //checks to see how many players to set up for the game
    if(numOfPlayers == 1)
    {
        console.log('\n' + 'Welcome Player 1!')
        player1 = {pname1: prompt('Enter Your Name: '), roundScore1: 0, finalScore1: 0}
            
             
    }
    else if(numOfPlayers == 2)
    {
        console.log('\n' + 'Welcome Player 1!')
        player1 = {pname1: prompt('Enter Your Name: '), roundScore1: 0, finalScore1: 0}
        console.log('\n' + 'Welcome Player 2!')
        player2 = {pname2: prompt('Enter Your Name: '), roundScore2: 0, finalScore2: 0}
    }
    else if(numOfPlayers == 3)
    {
        console.log('\n' + 'Welcome Player 1!')
        player1 = {pname1: prompt('Enter Your Name: '), roundScore1: 0, finalScore1: 0}
        console.log('\n' + 'Welcome Player 2!')
        player2 = {pname2: prompt('Enter Your Name: '), roundScore2: 0, finalScore2: 0}
        console.log('\n' + 'Welcome Player 3!')
        player3 = {pname3: prompt('Enter Your Name: '), roundScore3: 0, finalScore3: 0}
    }
    else
    {
        console.log('Enter a number between 1 & 3')
        let newPlayers = prompt('How many players (1 - 3) ? ')
        playerAmmt(newPlayers)
    }
    
}
function playAnother(f,plyammt)
{
    //play again function to either spin again or check if the word is correct
    if(f == 1)
    {
        round++
        again++
        spinning();
        
    }

    else if(f == 2)
    {
        //checks how many players are in the game to see if the word should be reset or not
        if(plyammt == 1)
        {

            var userWord = prompt('Enter the word: ')

            player1.finalScore1 = player1.finalScore1 + player1.roundScore1
            if(userWord == word1)
            {
                console.log( '\n' + 'You solved the Puzzle! ' + '\n' + 'Your round score was: ' + player1.roundScore1  + '\n' + 'Your total score is: ' + player1.finalScore1)
                player1.roundScore1 = 0
                round = 1
                if(players == 2)
                {
                    if(playerTurn > 2)
                    {
                        playerTurn = 1
                    }   
                    else
                    {
                        playerTurn++
                    }
                }
                    if(players == 3)
                    {
                        if(playerTurn > 3)
                        {
                            playerTurn = 1
                        }
                        else
                        {
                        playerTurn++
                        }
                    }
                    spinning()
            }
            else
            {
                console.log('\n' + 'That is not the word : (' + '\n')
                console.log('Your round score was: ' + player1.roundScore1  + '\n' + 'Your total score is: ' + player1.finalScore1)
                player1.roundScore1 = 0
                
                if(players == 2)
                {
                    round++
                    if(playerTurn > 2)
                    {
                        playerTurn = 1
                    }
                    else
                    {
                    playerTurn++
                    }
                }
                else if(players == 3)
                {
                    round++
                    if(playerTurn > 3)
                    {
                        playerTurn = 1
                    }
                    else
                    {
                    playerTurn++
                    }
                }
                else
                {
                    round = 1
                }
                spinning()
                    
            }
        }
        else if(plyammt == 2)
        {
            var userWord = prompt('Enter the word: ')

            player2.finalScore2 = player2.finalScore2 + player2.roundScore2
            if(userWord == word1)
            {
                console.log( '\n' + 'You solved the Puzzle! ' + '\n' + 'Your round score was: ' + player2.roundScore2  + '\n' + 'Your total score is: ' + player2.finalScore2)
                player2.roundScore2 = 0
                round = 1
                if(players == 2)
                {
                    if(playerTurn > 2)
                    {
                        playerTurn = 1
                    }   
                    else
                    {
                        playerTurn++
                    }
                }
                    if(players == 3)
                    {
                        if(playerTurn > 3)
                        {
                            playerTurn = 1
                        }
                        else
                        {
                        playerTurn++
                        }
                    }
                    spinning()
            }
            else
            {
                console.log('\n' + 'That is not the word : (' + '\n')
                console.log('Your round score was: ' + player2.roundScore2  + '\n' + 'Your total score is: ' + player2.finalScore2)
                player2.roundScore2 = 0
                if(players == 2)
                {
                    round++
                    if(playerTurn > 2)
                    {
                        playerTurn = 1
                    }
                    else
                    {
                    playerTurn++
                    }
                }
                else if(players == 3)
                {
                    round++
                    if(playerTurn > 3)
                    {
                        playerTurn = 1
                    }
                    else
                    {
                    playerTurn++
                    }
                }
                else
                {
                    round = 1
                }
                spinning()
                    
            }
        }
        else
        {
            var userWord = prompt('Enter the word: ')

            player3.finalScore3 = player3.finalScore3 + player3.roundScore3
            if(userWord == word1)
            {
                console.log( '\n' + 'You solved the Puzzle! ' + '\n' + 'Your round score was: ' + player3.roundScore3  + '\n' + 'Your total score is: ' + player3.finalScore3)
                player3.roundScore3 = 0
                round = 1
                if(players == 2)
                {
                    if(playerTurn > 2)
                    {
                        playerTurn = 1
                    }   
                    else
                    {
                        playerTurn++
                    }
                }
                    if(players == 3)
                    {
                        if(playerTurn > 3)
                        {
                            playerTurn = 1
                        }
                        else
                        {
                        playerTurn++
                        }
                    }
                    spinning()
            }
            else
            {
                console.log('\n' + 'That is not the word : (' + '\n')
                console.log('Your round score was: ' + player3.roundScore3  + '\n' + 'Your total score is: ' + player3.finalScore3)
                player3.roundScore3 = 0
                if(players == 2)
                {
                    round++
                    if(playerTurn > 2)
                    {
                        playerTurn = 1
                    }
                    else
                    {
                    playerTurn++
                    }
                }
                else if(players == 3)
                {
                    round++
                    if(playerTurn > 3)
                    {
                        playerTurn = 1
                    }
                    else
                    {
                    playerTurn++
                    }
                }
                else
                {
                    round = 1
                }
                spinning()
                    
            }
        }
    }
    else
    {
        console.log('Needs to be a 1 or 2' + '\n')
        var anotherPlayAgain = prompt('Enter 1 to spin & Guess again, or 2 to solve: ')
        playAnother(anotherPlayAgain)
    }
        
}
function spinning()
{
    spun++
    spun = spun - again
    console.log(spun)
    //checks if game should end
    EndGame(spun)
    again = 0
    //checks what turn it is 
    if(playerTurn == 1)
    {
        //announces round score and player name
        console.log('\n' + 'Player 1 - ' + player1.pname1 + ' it is your turn!')
        console.log('Your round score is: ' + player1.roundScore1)
        prompt('Press ENTER to spin the wheel')
        console.log('\n')
        var ammCorrect = 0
        //gets points 
        points = spinTheWheel()
        
        if(points == 0)
        {
            //if points are zero then your turn is skipped
            console.log('You got zero points on your spin, so you lose your turn' + '\n')
            if(players == 2)
                {
                    
                    if(playerTurn >= 2)
                    {
                        playerTurn = 1
                    }
                    else
                    {
                    playerTurn++
                    }
                    spinning()
                }
                else if(players == 3)
                {
                    
                    if(playerTurn >= 3)
                    {
                        playerTurn = 1
                    }
                    else
                    {
                    playerTurn++
                    }
                    spinning()
                }
                else
                {
                    round = 1
                    spinning()
                }
        }
            console.log('You Spun: [' + points + ']')
            //sets up word if it is a new round
            if(round == 1)
            {
                word1 = getRandomWord();
                var blockedWord = '-'.repeat(word1.length)
                
                theWord = blockedWord
            }
            
            console.log('Puzzle: ' + theWord)
            var letter = prompt('What letter would you like to guess? ')
            //checks if letter is correct
            for(var i = 0; i < word1.length; i++)
            {
                if(letter === word1.charAt(i))
                {
                    theWord = replaceChar(theWord,letter,i)
                    ammCorrect++;
    
                }
            }
            //if you are correct then you get points
            if(ammCorrect >= 1)
            {
                for(var j = 0; j < ammCorrect; j++)
                {
                    player1.roundScore1 = player1.roundScore1 + points
                }
                console.log('YES! Puzzle: ' + theWord)
                console.log('Your round score is ' + player1.roundScore1 + '\n')
                ammCorrect = 0;
            }
            else
            {
                //if you miss then on to the next round or player depending on the situtation
                console.log('Letter does not exist in word')
                player1.finalScore1 = player1.roundScore1 + player1.finalScore1
                console.log('Your total score is: ' + player1.finalScore1)
                console.log('\n'+ 'Next Round')
                player1.roundScore1 = 0
               
                if(players == 2)
                {
                    round++
                    if(playerTurn >= 2)
                    {
                        playerTurn = 1
                    }
                    else
                    {
                    playerTurn++
                    }
                    spinning()
                }
                else if(players == 3)
                {
                    round++
                    if(playerTurn >= 3)
                    {
                        playerTurn = 1
                    }
                    else
                    {
                    playerTurn++
                    }
                    spinning()
                }
                else
                {
                    round = 1
                    spinning()
                }
                
            }
            
            var playAgain = prompt('Enter 1 to spin & Guess again, or 2 to solve: ')
            playAnother(playAgain,playerTurn)
            
    }
    if(playerTurn == 2)
    {
        //same code as player turn one but for player two
        console.log('\n' + 'Player 2 - ' + player2.pname2 + ' it is your turn!')
        console.log('Your round score is: ' + player2.roundScore2)
        prompt('Press ENTER to spin the wheel')
        console.log('\n')
        var ammCorrect = 0
        points = spinTheWheel()
        if(points == 0)
        {
            console.log('You got zero points on your spin, so you lose your turn' + '\n')
            if(players == 2)
                {
                    
                    if(playerTurn >= 2)
                    {
                        playerTurn = 1
                    }
                    else
                    {
                    playerTurn++
                    }
                    spinning()
                }
                else if(players == 3)
                {
                    
                    if(playerTurn >= 3)
                    {
                        playerTurn = 1
                    }
                    else
                    {
                    playerTurn++
                    }
                    spinning()
                }
                else
                {
                    round = 1
                    spinning()
                }
        }
            console.log('You Spun: [' + points + ']')
            
            if(round == 1)
            {
                word1 = getRandomWord();
                var blockedWord = '-'.repeat(word1.length)
                
                theWord = blockedWord
            }
            
            console.log('Puzzle: ' + theWord)
            var letter = prompt('What letter would you like to guess? ')
            
            for(var i = 0; i < word1.length; i++)
            {
                if(letter === word1.charAt(i))
                {
                    theWord = replaceChar(theWord,letter,i)
                    ammCorrect++;
    
                }
            }
            if(ammCorrect >= 1)
            {
                for(var j = 0; j < ammCorrect; j++)
                {
                    
                    player2.roundScore2 = player2.roundScore2 + points
                }
                console.log('YES! Puzzle: ' + theWord)
                console.log('Your round score is ' + player2.roundScore2 + '\n')
                
            }
            else
            {
                console.log('Letter does not exist in word')
                player2.finalScore2 = player2.roundScore2 + player2.finalScore2
                console.log('Your total score is: ' + player2.finalScore2)
                console.log('\n'+ 'Next Round')
                player2.roundScore2 = 0
                if(players == 2)
                {
                    round++
                    if(playerTurn == 2)
                    {
                        playerTurn = 1
                    }
                    else
                    {
                    playerTurn++
                    }
                    spinning()
                }
                else if(players == 3)
                {
                    round++
                    if(playerTurn == 3)
                    {
                        playerTurn = 1
                    }
                    else
                    {
                    playerTurn++
                    }
                    spinning()
                }
                else
                {
                    playerTurn = 1
                    round = 1
                    spinning()
                }
                
            }
            
            var playAgain = prompt('Enter 1 to spin & Guess again, or 2 to solve: ')
            playAnother(playAgain, playerTurn)
            
    }
    if(playerTurn == 3)
    {
        //same code as player one but for player 3
        console.log('\n' + 'Player 3 - ' + player3.pname3 + ' it is your turn!')
        console.log('Your round score is: ' + player3.roundScore3)
        prompt('Press ENTER to spin the wheel')
        console.log('\n')
        var ammCorrect = 0
        points = spinTheWheel()
        if(points == 0)
        {
            console.log('You got zero points on your spin, so you lose your turn' + '\n')
            if(players == 2)
                {
                    
                    if(playerTurn >= 2)
                    {
                        playerTurn = 1
                    }
                    else
                    {
                    playerTurn++
                    }
                    spinning()
                }
                else if(players == 3)
                {
                    
                    if(playerTurn >= 3)
                    {
                        playerTurn = 1
                    }
                    else
                    {
                    playerTurn++
                    }
                    spinning()
                }
                else
                {
                    round = 1
                    spinning()
                }
        }
            console.log('You Spun: [' + points + ']')
            
            if(round == 1)
            {
                word1 = getRandomWord();
                var blockedWord = '-'.repeat(word1.length)
                
                theWord = blockedWord
            }
            
            console.log('Puzzle: ' + theWord)
            var letter = prompt('What letter would you like to guess? ')
            
            for(var i = 0; i < word1.length; i++)
            {
                if(letter === word1.charAt(i))
                {
                    theWord = replaceChar(theWord,letter,i)
                    ammCorrect++;
    
                }
            }
            if(ammCorrect >= 1)
            {
                for(var j = 0; j < ammCorrect; j++)
                {
                    player3.roundScore3 = player3.roundScore3 + points
                }
                console.log('YES! Puzzle: ' + theWord)
                console.log('Your round score is ' + player3.roundScore3 + '\n')
                ammCorrect = 0;
            }
            else
            {
                console.log('Letter does not exist in word')
                player3.finalScore3 = player3.roundScore3 + player3.finalScore3
                player3.roundScore3 = 0
                console.log('Your total score is: ' + player3.finalScore3)
                console.log('\n'+ 'Next Round')
                if(players == 2)
                {
                    round++
                    if(playerTurn == 2)
                    {
                        playerTurn = 1
                    }
                    else
                    {
                    playerTurn++
                    }
                    spinning()
                }
                else if(players == 3)
                {
                    round++
                    if(playerTurn == 3)
                    {
                        playerTurn = 1
                    }
                    else
                    {
                    playerTurn++
                    }
                    spinning()
                }
                else
                {
                    round = 1
                    spinning()
                }
                
            }
            
            var playAgain = prompt('Enter 1 to spin & Guess again, or 2 to solve: ')
            playAnother(playAgain)
    }
    
    
    
}
main();