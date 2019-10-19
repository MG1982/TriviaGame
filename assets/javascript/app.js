/* 
1 - The game starts when the player clicks the Start button.
2 - Once the game starts there is a clock countdown.
4 - The game ends after all questions have been displayed.
5 - The player can only guess one answer per question.
6 - Include the timer so the player can see it.
7 - All the questions are displayed one at a time.
*/
$(document).ready(function() {
  let triviaQuestions = [
    {
      question: "As of 2015, how many seasons of Family Guy have aired?",
      answerList: ["20", "10", "15", "25"],
      answer: 3,
      image: "../images/familyguy.jpg",
      answerText:
        "Family Guy has been on the air for 15 seasons. It started in 1999 on Fox, was cancelled in 2002, then revived again in 2005."
    },
    {
      question: "How old is Quagmire?",
      answerList: ["51", "61", "41", "69"],
      answer: 2,
      image: "../images/quagmire.jpg",
      answerText:
        "According to his driver's license, Glenn Quagmire is 61. The gang discovers this in the episode FOX-y Lady in Season 7. He claims the secret to his youthful appearance is carrots."
    },
    {
      question: "What is Peter's all-time favorite song?",
      answerList: [
        "Surfin' Dog",
        "Surfin' World",
        "Surfin' Bird",
        "Surfin' USA"
      ],
      answer: 3,
      image: "../images/surfinbird.jpg",
      answerText:
        "In Season 1, Peter gets his hands on Surfin' Bird by the Trashmen and drives the entire family insane. Brian and Stewie make it their mission to destroy every copy of the record they can find."
    },
    {
      question:
        "Family Guy was the first animated show to be nominated for an Emmy since?",
      answerList: [
        "The Flinstones",
        "The Simpsons",
        "The Jetsons",
        "South Park"
      ],
      answer: 1,
      image: "../images/emmy.jpg",
      answerText:
        "No animated series had been nominated for an Emmy (outstanding comedy) since 1961. The Flintstones held this honor until 2009, when Family Guy was nominated."
    },
    {
      question:
        "Stewie starts working out at the gym after he gets beat up by:",
      answerList: ["Meg", "Brian", "Chris", "Joe's Baby Daughter"],
      answer: 4,
      image: "../images/stewie.jpg",
      answerText:
        "After Joe's infant daughter Susie beats him up, Stewie joins a gym to get buff. He soon gets hooked on steroids."
    },
    {
      question:
        "When Peter finds out his house isn't part of the United States, what does he name his property??",
      answerList: ["Petelandia", "Peterville", "Petemaria", "Petoria"],
      answer: 4,
      image: "../images/petoria.jpg",
      answerText:
        "After declaring his house the new country Petoria, Peter annexes Joe's pool (Joehio), starts a war called Operation Desert Clam, loses electricity and water, is threatened by the U.S. military, and eventually repatriates."
    },
    {
      question:
        "In A Very Special Family Guy Freakin' Christmas, what band's Christmas special does Peter insist on watching?",
      answerList: ["KISS", "Bon Jovi", "Twisted Sister", "Aerosmith"],
      answer: 1,
      image: "../images/kiss.jpg",
      answerText:
        "All Peter wants to do during the Christmas season is stay home and watch Christmas specials. His favorite is KISS Saves Santa, where the makeup-wearing band saves Santa from bandits with their guitars."
    },
    {
      question: "What is the name of Stewie's teddy bear??",
      answerList: ["Robert", "Rupert", "Peter", "Patrick"],
      answer: 2,
      image: "../images/rupert.jpg",
      answerText:
        "Rupert, Stewie's beloved teddy bear, was once accidentally sold at a yard sale. Stewie and Brian set off on a trip to rescue him."
    },
    {
      question:
        "Peter has a long history of violence with a chicken. What is its name?",
      answerList: ["Charlie", "Bob", "Ernie", "Bill"],
      answer: 3,
      image: "../images/ernie.jpg",
      answerText:
        "The giant chicken Peter often fights with is named Ernie. The fights are usually over expired coupons."
    },
    {
      question: "What is the name of Herbert's dog?",
      answerList: ["jane", "Jesse", "Jill", "Brian"],
      answer: 2,
      image: "../images/jesse.jpg",
      answerText:
        "Jesse is an old dog. His legs are broken so he walks using only his forelegs and drags the rest of his body."
    }
  ];
});
