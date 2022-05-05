// import readline module
const readline = require("readline");
const hotels = require('./main')
const getCheapestHotel = hotels.getCheapestHotel 

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// create empty user input
let userInput = "";

// question user to enter name
rl.question("data\n", function (string) {
  userInput = string;
  // close input stream
  getCheapestHotel(userInput)
  rl.close();
});