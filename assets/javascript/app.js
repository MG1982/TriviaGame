// doc ready function.
$(document).ready(function() {
  // Global declarations.
  let currentQuestion;
  let correctAnswer;
  let incorrectAnswer;
  let unanswered;
  let answered;
  let userSelect;
  let seconds;
  let time;
  let remainingTime = "00:";
  let totalAverageTime = "";
  const maxGameTime = 150;
  const messages = {
    correct: "Congratulations!, you guessed the correct answer",
    incorrect: "Awww too bad, that's not the correct answer",
    timedOut: "Oops! Looks like you ran out of time",
    finished: "All done, Let's see your results!"
  };
  // Trivia questions.
  const triviaQuestions = [
    {
      question: "As of 2019, how many seasons of Family Guy have aired?",
      answerList: ["20", "10", "30", "18"],
      answer: 3,
      image: "assets/images/familyguy.jpg",
      answerText:
        "Family Guy has been on the air for 18 seasons. It started in 1999 on Fox, was cancelled in 2002, then revived again in 2005."
    },
    {
      question: "How old is Quagmire?",
      answerList: ["49", "51", "61", "41"],
      answer: 2,
      image: "assets/images/quagmire.jpg",
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
      answer: 2,
      image: "assets/images/surfinbird.jpg",
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
      answer: 0,
      image: "assets/images/emmy.jpg",
      answerText:
        "No animated series had been nominated for an Emmy (outstanding comedy) since 1961. The Flintstones held this honor until 2009, when Family Guy was nominated."
    },
    {
      question:
        "Stewie starts working out at the gym after he gets beat up by?",
      answerList: ["Herbert", "Meg", "Brian", "Joe's Baby Daughter"],
      answer: 3,
      image: "assets/images/stewie.jpg",
      answerText:
        "After Joe's infant daughter Susie beats him up, Stewie joins a gym to get buff. He soon gets hooked on steroids."
    },
    {
      question:
        "When Peter finds out his house isn't part of the United States, what does he name his property?",
      answerList: ["Petelandia", "Peterville", "Petemaria", "Petoria"],
      answer: 3,
      image: "assets/images/petoria.jpg",
      answerText:
        "After declaring his house the new country Petoria, Peter annexes Joe's pool (Joehio), starts a war called Operation Desert Clam, loses electricity and water, is threatened by the U.S. military, and eventually repatriates."
    },
    {
      question:
        "In A Very Special Family Guy Freakin' Christmas, what band's Christmas special does Peter insist on watching?",
      answerList: ["KISS", "Bon Jovi", "Twisted Sister", "Def Leppard"],
      answer: 0,
      image: "assets/images/kiss.jpg",
      answerText:
        "All Peter wants to do during the Christmas season is stay home and watch Christmas specials. His favorite is KISS Saves Santa, where the makeup-wearing band saves Santa from bandits with their guitars."
    },
    {
      question: "What is the name of Stewie's teddy bear?",
      answerList: ["Robert", "Rupert", "Peter", "Patrick"],
      answer: 1,
      image: "assets/images/rupert.jpg",
      answerText:
        "Rupert, Stewie's beloved teddy bear, was once accidentally sold at a yard sale. Stewie and Brian set off on a trip to rescue him."
    },
    {
      question:
        "Peter has a long history of violence with a chicken. What is its name?",
      answerList: ["Charlie", "Bob", "Ernie", "Bernard"],
      answer: 2,
      image: "assets/images/ernie.jpg",
      answerText:
        "The giant chicken Peter often fights with is named Ernie. The fights are usually over expired coupons."
    },
    {
      question: "What is the name of Herbert's dog?",
      answerList: ["jane", "Rosie", "Jesse", "Brian"],
      answer: 2,
      image: "assets/images/jesse.jpg",
      answerText:
        "Jesse is an old dog. His legs are broken so he walks using only his forelegs and drags the rest of his body."
    }
  ];
  // hides everything but the start button on page load.
  $("#game-col").hide();

  $("#start-btn").on("click", function() {
    // start button hides after click.
    $(this).hide();
    newGame();
  });

  $("#play-again-btn").on("click", function() {
    // play again button hides after click.
    $(this).hide();
    newGame();
  });
  // shows game div and clears/hides end of game divs.
  function newGame() {
    $("#game-col").show();
    $("#finished-message").empty();
    $("#correct-answers").empty();
    $("#incorrect-answers").empty();
    $("#unanswered").empty();
    $("#average-time").hide();
    $("#remaining-total").hide();
    $("#img").hide();
    $("#img-text").hide();
    currentQuestion = 0;
    correctAnswer = 0;
    incorrectAnswer = 0;
    unanswered = 0;
    remainingTime = "00:";
    totalAverageTime = "";
    newQuestion();
  }
  //empties divs ready for next question.
  function newQuestion() {
    $("#message").empty();
    $("#corrected-answer").empty();
    $("#img").hide();
    $("#img-text").hide();
    answered = true;

    // Shows how many questions are left to answer.
    $("#current-question").html(
      "Question " + (currentQuestion + 1) + " of " + triviaQuestions.length
    );
    $(".question").html(triviaQuestions[currentQuestion].question);
    // for loop to display choices relative to the current question.
    for (let i = 0; i <= 4; i++) {
      let choices = $("<div>");
      choices.text(triviaQuestions[currentQuestion].answerList[i]);
      choices.attr({ "data-index": i });
      choices.addClass("this-choice");
      $(".answer-list").append(choices);
    }
    timer();
    // stop timer on click and calls answer page.
    $(".this-choice").on("click", function() {
      userSelect = $(this).data("index");
      clearInterval(time);
      answerPage();
    });
  }
  // countdown timer.
  function timer() {
    seconds = 15;
    $("#time-left").html("00:" + seconds);
    answered = true;
    time = setInterval(showTimer, 1000);
  } // starts/stops the countdown and handles the html display of the timer.
  function showTimer() {
    seconds--;
    if (seconds < 10) {
      $("#time-left").html("00:0" + seconds);
    } else {
      $("#time-left").html("00:" + seconds);
    }
    if (seconds < 1) {
      clearInterval(time);
      answered = false;
      answerPage();
    }
  }
  // adds up remaining time from each answered question then gives an average at end of game.
  function averageTime() {
    remainingTime = parseInt(seconds + parseInt(remainingTime));
    totalAverageTime = maxGameTime - parseInt(remainingTime);
  }
  // clears questions and choices then shows image/text relative to the answer.
  function answerPage() {
    $("#current-question").empty();
    $(".this-choice").empty();
    $(".question").empty();
    $("#img").show();
    $("#img-text").show();

    let rightAnswerText =
      triviaQuestions[currentQuestion].answerList[
        triviaQuestions[currentQuestion].answer
      ];
    let rightAnswerIndex = triviaQuestions[currentQuestion].answer;

    let imageLink = triviaQuestions[currentQuestion].image;
    let newImg = $("<img>");
    newImg.attr("src", imageLink);
    newImg.addClass("img");
    $("#img").html(newImg);

    let imgText = triviaQuestions[currentQuestion].answerText;
    newText = $("<div>");
    newText.html(imgText);
    newText.addClass("img-text");
    $("#img-text").html(newText);

    // user answer checks.
    if (userSelect == rightAnswerIndex && answered === true) {
      correctAnswer++;
      averageTime();
      $("#message").html(messages.correct);
    } else if (userSelect != rightAnswerIndex && answered === true) {
      incorrectAnswer++;
      averageTime();
      $("#message").html(messages.incorrect);
      $("#corrected-answer").html("The correct answer was: " + rightAnswerText);
    } else {
      unanswered++;
      averageTime();
      $("#message").html(messages.timedOut);
      $("#corrected-answer").html("The correct answer was: " + rightAnswerText);
      answered = true;
    }
    // checks if all questions complete else moves to next question.
    if (currentQuestion == triviaQuestions.length - 1) {
      setTimeout(display, 6000);
    } else {
      currentQuestion++;
      setTimeout(newQuestion, 6000);
    }
  }

  // displays summary and reveals start again button.
  function display() {
    $("#time-left").empty();
    $("#message").empty();
    $("#corrected-answer").empty();
    $("#img").hide();
    $("#img-text").hide();
    $("#finished-message").html(messages.finished);
    $("#correct-answers").html("correct Answers: " + correctAnswer);
    $("#incorrect-answers").html("Incorrect Answers: " + incorrectAnswer);
    $("#unanswered").html("Unanswered: " + unanswered);
    $("#average-time").show();
    $("#average-time").html(
      "Average Time: " + totalAverageTime / 10 + " Seconds"
    );
    $("#play-again-btn").addClass("reset");
    $("#play-again-btn").show();
    $("#play-again-btn").html("PLAY AGAIN");
  }
});
