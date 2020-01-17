'use strict';

var username = prompt('Helllloooooooooo User! What\'s your name?');

alert('Hi ' + username + ' thanks for coming to my about me webpage. I have a short 5 question quiz for you to test if you really know me! Don\'t worry it\'s all yes or no questions only. No calculus involved.');

var numberCorrect = 0;
var question1answered = false;
var question2answered = false;
var question3answered = false;
var question4answered = false;
var question5answered = false;


//thank you to w3schools.com for the info on the do/while statement

do {
  var questionOne = prompt('Ok ' + username + ', if that IS your real name, my favorite color is blue right?');

  if (questionOne.toLowerCase() === 'yes' || questionOne.toLowerCase() === 'y') {
    numberCorrect += 1;
    alert('Good job, very well done, and all of that jazz. On to question 2!');
    question1answered = true;
  }

  else if (questionOne.toLowerCase() === 'no' || questionOne.toLowerCase() === 'n') {
    alert('Well you don\'t know me at all and if you really ARE ' + username + ' you\'d know my favorite color is blue.');
    question1answered = true;
  }

  else {
    alert('Hey uh.... ' + username + ' right?? I couldn\'t understand you there, why don\'t you try again with a "yes" or "no" kind of response.');
  }
}
while (question1answered === false);

do {
  var questionTwo = prompt('So you survived the first question have you... I see... well this one is a doozy. Quick! My dog\'s name is Alfred Chester Wilhelm II correct?');

  if (questionTwo.toLowerCase() === 'no' || questionTwo.toLowerCase() === 'n') {
    numberCorrect += 1;
    alert('Darn skippy. What kind of made up name is that? Eh try your luck on question 3.');
    question2answered = true;
  }

  else if (questionTwo.toLowerCase() === 'yes' || questionTwo.toLowerCase() === 'y') {
    alert('Bahahahaha ' + username + ' you have have some sense of humor. I like you.');
    question2answered = true;
  }

  else {
    alert('*facepalm* ' + username + ' I can trust you to answer a yes or no question can\'t I? Try question 2 again!');
  }
}
while (question2answered === false);

do {
  var questionThree = prompt('How about television shows. You\'re (probably) human, you know what a tv is I don\'t need to explain it to you MY favorite show of all time is The Office right?');

  if (questionThree.toLowerCase() === 'no' || questionThree.toLowerCase() === 'n') {
    numberCorrect += 1;
    alert('That\'s right! It\'s not! Because I don\'t HAVE a favorite tv show and even though the hit tv show The Office is really good it\'s not my "favorite". But ' + username + ' you knew that already. Go on to question 4 you rock star you.');
    question3answered = true;
  }

  else if (questionThree.toLowerCase() === 'yes' || questionThree.toLowerCase() === 'y') {
    alert('Wrong. Trick question I don\'t have a favorite tv show. Got-chaaaa.');
    question3answered = true;
  }

  else {
    alert('Hello "' + username + '" this is a "yes" or "no" quiz only. This means that you need to type "y" or "yes" for yes, and likewise "n" or "no" for no. Unfortunately I cannot accept any other answer from you. Luckily you can try again!');
  }
}
while (question3answered === false);

do {
  var questionFour = prompt('I can see you\'re still here. My birthday is in July, correct?');

  if (questionFour.toLowerCase() === 'no' || questionFour.toLowerCase() === 'n') {
    numberCorrect += 1;
    alert('Yea it\'s not in July, it\'s in June. How come you know me so well? The final question awaits you, ' + username + '!');
    question4answered = true;
  }

  else if (questionFour.toLowerCase() === 'yes' || questionFour.toLowerCase() === 'y') {
    alert('OMG. Is THIS why you missed my birthday party last year????? You thought it was in July!? ' + username + ' you silly goose!! I was born in June! You\'d better remember this year. That\'s all I\'m saying.');
    question4answered = true;
  }

  else {
    alert('ERROR ERROR ERROR *beep boop* DOES NOT COMPUTE PLEASE TRY AGAIN. THANK YOU FOR YOUR COOPERATION.');
  }
}
while (question4answered === false);

do {
  var questionFive = prompt('Hey ' + username + ', thanks a lot for taking this quiz. I have a final question for you. I nearly failed calculus in senior year in high school didn\'t I?');

  if (questionFive.toLowerCase() === 'yes' || questionFive.toLowerCase() === 'y') {
    numberCorrect += 1;
    alert('Yes!! It was the worst. I had to come early to school for months to make up all the extra work. You know, I\'m happy you got this question right, even though I promised no calculus would be involved at the beginning of this quiz. Thanks for playing!');
    question5answered = true;
  }

  else if (questionFive.toLowerCase() === 'no' || questionFive.toLowerCase() === 'n') {
    alert('Fell for the surprise calculus question huh ' + username + '? Thought yes or no questions wouldn\'t need calculus to solve them did you? Thanks for playing the game and better luck next time!');
    question5answered = true;
  }

  else {
    alert(username + ', ' + username + ', ' + username + '.  Kindly try again with a "yes" or "no" response. See, truth be told, one day I\'ll be able to code in the ability to accept more varied types of responses but for now play along ok? Thanks, it\'s the last question and I know you\'ve been very patient.');
  }
}
while (question5answered === false);

alert('Wow ' + username + ' you got ' + numberCorrect + ' questions right!!');
