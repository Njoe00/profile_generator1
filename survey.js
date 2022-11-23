const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("what is your full Name?", (answer) => {
  rl.question("What is one of your hobbies?", (answer1) => {
    rl.question("What music do you enjoy?", (answer2) => {
      rl.question("What mealtime is your favorite (eg: Brunch, dinner)?", (answer3)=> {
        rl.question("What is your favorite meal for that time?", (answer4) => {
          rl.question("Which sport is your favorite absolute favourite?", (answer5) => {
            rl.question("Tell us something you're amazing at (your secret superpower?)", (answer6) => {
              rl.question("Would you like to see your profile?", (answer7) => {
                console.log(`Your Full Name: ${answer}`);
                console.log(`Favorite Hobby: ${answer1}`);
                console.log(`Favorite Music: ${answer2}`);
                console.log(`Favorite Meal Time & Meal: ${answer3} & ${answer4}`);
                console.log(`Favorite Sport: ${answer5}`);
                console.log(`Superpower: ${answer6}`);
                                
                rl.close();

              });
            });
          });
        });
      });
    });
  });
});




