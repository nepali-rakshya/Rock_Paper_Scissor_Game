// rock paper scissors game

let gameBegin = () => {
  let userInput = prompt("Rock, Paper or Scissors").toUpperCase();
  let user = userInput.charAt(0);
  console.log(user);
  let keys = ["Rock", "Paper", "Scissors"];

  let compInput = keys[Math.floor(Math.random() * keys.length)];
  let bot = compInput.charAt(0);
  console.log(bot);
  if (
    (user === "R" && bot === "R") ||
    (user === "P" && bot === "P") ||
    (user === "S" && bot === "S")
  ) {
    console.log("It's a tie");
  } else if (
    (user === "R" && bot === "P") ||
    (user === "P" && bot === "S") ||
    (user === "S" && bot === "R")
  ) {
    console.log("The bot wins");
  } else if (
    (user === "R" && bot === "S") ||
    (user === "P" && bot === "R") ||
    (user === "S" && bot === "P")
  ) {
    console.log("The user wins");
  }
};

let replay;

do {
  gameBegin();
  replay = confirm("Do you want to replay?") ? true : false;
} while (replay === true);

console.log("Well Played!!!!");
