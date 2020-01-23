'use strict';

var username = prompt('Helllloooooooooo User! What\'s your name?');

alert('Hi ' + username + ' thanks for coming to my About Me webpage. I have a short 7 question quiz for you to test if you really know me! Don\'t worry it\'s pretty easy. No calculus involved.');

var numberCorrect = 0;
var question1answered = false;
var question2answered = false;
var question3answered = false;
var question4answered = false;
var question5answered = false;
var question6answered = false;
var question7answered = false;

function firstQuestion() {
  do{
    var questionOne = prompt('Ok ' + username + ', if that IS your real name, my favorite color is blue right?');
    if(questionOne.toLowerCase() === 'yes' || questionOne.toLowerCase() === 'y'){
      numberCorrect ++;
      alert('Good job, very well done, and all of that jazz. On to question 2!');
      question1answered = true;
    }else if(questionOne.toLowerCase() === 'no' || questionOne.toLowerCase() === 'n'){
      alert('Well you don\'t know me at all and if you really ARE ' + username + ' you\'d know my favorite color is blue.');
      question1answered = true;
    }else{
      alert('Hey uh.... ' + username + ' right?? I couldn\'t understand you there, why don\'t you try again with a "yes" or "no" kind of response.');
    }
  }while (question1answered === false);
}
firstQuestion();

do{
  var questionTwo = prompt('So you survived the first question have you... I see... well this one is a doozy. Quick! My dog\'s name is Alfred Chester Wilhelm II correct?');
  if(questionTwo.toLowerCase() === 'no' || questionTwo.toLowerCase() === 'n'){
    numberCorrect ++;
    alert('Darn skippy. What kind of made up name is that? Eh try your luck on question 3.');
    question2answered = true;
  }else if (questionTwo.toLowerCase() === 'yes' || questionTwo.toLowerCase() === 'y'){
    alert('Bahahahaha ' + username + ' you have have some sense of humor. I like you.');
    question2answered = true;
  }else{
    alert('*facepalm* ' + username + ' I can trust you to answer a yes or no question can\'t I? Try question 2 again!');
  }
}while (question2answered === false);

do{
  var questionThree = prompt('How about television shows. You\'re (probably) human, you know what a tv is I don\'t need to explain it to you MY favorite show of all time is The Office right?');
  if(questionThree.toLowerCase() === 'no' || questionThree.toLowerCase() === 'n'){
    numberCorrect += 1;
    alert('That\'s right! It\'s not! Because I don\'t HAVE a favorite tv show and even though the hit tv show The Office is really good it\'s not my "favorite". But ' + username + ' you knew that already. Go on to question 4 you rock star you.');
    question3answered = true;
  }else if(questionThree.toLowerCase() === 'yes' || questionThree.toLowerCase() === 'y'){
    alert('Wrong. Trick question I don\'t have a favorite tv show. Got-chaaaa.');
    question3answered = true;
  }else{
    alert('Hello "' + username + '" this is a "yes" or "no" quiz only. This means that you need to type "y" or "yes" for yes, and likewise "n" or "no" for no. Unfortunately I cannot accept any other answer from you. Luckily you can try again!');
  }
}while (question3answered === false);

do{
  var questionFour = prompt('I can see you\'re still here. My birthday is in July, correct?');
  if(questionFour.toLowerCase() === 'no' || questionFour.toLowerCase() === 'n'){
    numberCorrect += 1;
    alert('Yea it\'s not in July, it\'s in June. How come you know me so well? The not final question awaits you, ' + username + '!');
    question4answered = true;
  }else if(questionFour.toLowerCase() === 'yes' || questionFour.toLowerCase() === 'y'){
    alert('OMG. Is THIS why you missed my birthday party last year????? You thought it was in July!? ' + username + ' you silly goose!! I was born in June! You\'d better remember this year. That\'s all I\'m saying.');
    question4answered = true;
  }else{
    alert('ERROR ERROR ERROR *beep boop* DOES NOT COMPUTE PLEASE TRY AGAIN. THANK YOU FOR YOUR COOPERATION.');
  }
}while (question4answered === false);

do{
  var questionFive = prompt('Hey ' + username + ', thanks a lot for taking this quiz. I have just a few more questions for you. I nearly failed calculus in senior year in high school didn\'t I?');
  if(questionFive.toLowerCase() === 'yes' || questionFive.toLowerCase() === 'y'){
    numberCorrect += 1;
    alert('Yes!! It was the worst. I had to come early to school for months to make up all the extra work. You know, I\'m happy you got this question right, even though I promised no calculus would be involved at the beginning of this quiz. Good job!');
    question5answered = true;
  }else if(questionFive.toLowerCase() === 'no' || questionFive.toLowerCase() === 'n'){
    alert('Fell for the surprise calculus question huh ' + username + '? Thought yes or no questions wouldn\'t need calculus to solve them did you? Don\'t worry you are still cool and a good sport. Better luck next time!');
    question5answered = true;
  }else{
    alert(username + ', ' + username + ', ' + username + '.  Kindly try again with a "yes" or "no" response. See, truth be told, one day I\'ll be able to code in the ability to accept more varied types of responses but for now play along ok? Thanks, it\'s almost the last question and I know you\'ve been very patient.');
  }
}while (question5answered === false);

var numberTries = 4;
var hiddenNumber = Math.floor(Math.random() * 25) + 1;
do{
  var questionSix = Number(prompt('Ok ' + username + ' you did so well on questions about me, let\'s see how good your guessing game is. Guess a number between 1 - 25. Tell you what. I\'ll give you 4 tries at it with hints! You have ' + numberTries + ' tries left.'));
  if(questionSix > 25 || questionSix < 1 || isNaN(questionSix) === true){
    numberTries --;
    if(numberTries < 1) {
      alert('Sorry ' + username + ', you lost. My number was ' + hiddenNumber + '. Better luck on the last question.');
      break;
    }
    alert('Please make sure you are guessing a whole number between 1 - 25. Try again! You have ' + numberTries + ' guesses left.');
  }else if(questionSix < hiddenNumber){
    numberTries --;
    if(numberTries < 1){
      alert('Sorry ' + username + ', you lost. My number was ' + hiddenNumber + '. Better luck on the last question.');
      break;
    }
    alert('Too low! You have ' + numberTries + ' more tries.');
  }else if(questionSix > hiddenNumber){
    numberTries --;
    if (numberTries < 1) {
      alert('Sorry ' + username + ', you lost. My number was ' + hiddenNumber + '. Better luck on the last question.');
      break;
    }
    alert('Too high! You have ' + numberTries + ' more tries.');
  }else if(questionSix === hiddenNumber){
    question6answered = true;
    numberCorrect ++;
    alert('Congrats! Yes it was ' + hiddenNumber + '! Move onto the last question.');
  }
}while (question6answered === false);

var placeTries = 6;
var places = ['hawaii', 'japan', 'mexico', 'italy'];
do{
  var questionSeven = prompt('Final question ' + username + '! Guess one place that I\'ve travelled to out of the following list: Hawaii, Chicago, Japan, Mexico, Italy, Spain, London, Toronto, France, Ireland, and Iceland. You have ' + placeTries + ' guesses left.');
  if(places.includes(questionSeven.toLowerCase())){
    numberCorrect ++;
    question7answered = true;
    alert('Correct! I have been to ' + questionSeven.charAt(0).toUpperCase() + questionSeven.substring(1).toLowerCase() + ' before. Good job ' + username + ' and thanks for playing!');
  }else{
    placeTries --;
    if(placeTries < 1){
      alert('Sorry ' + username + ' but the only places I\'ve been to is Hawaii, Japan, Mexico, and Italy. Someday I\'ll visit the others. Thanks for playing!');
      break;
    }
    alert('Sorry ' + username + '. I\'ve never been to ' + questionSeven.charAt(0).toUpperCase() + questionSeven.substring(1).toLowerCase() + '. Tell you what, I\'ll give you ' + placeTries + ' more guesses.');
  }
}while(question7answered === false);

alert('Wow ' + username + ' you got ' + numberCorrect + ' out of 7 questions right!!');
