// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

// var playerName = window.prompt("What is your robot's name?");
var playerName = ["Wayne Anthony", "Tim Tebow", "Grace Schut"];
var playerHealth = 100;
var playerAttack = 10;

var enemyName = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(playerName.length, playerName, playerHealth, playerAttack);
console.log(enemyName.length, enemyName, enemyHealth, enemyAttack);

// Let's create our fight function
var fight = function(enemyAlerted) {
    // Alert players that they are starting the round
    // window.alert("Welcome to Robot Gladiators!");

    // Prompt to fight
    var promptFight = window.prompt("Time to fight. Enter 'f' to fight or 's' to run.");

    // if player choses to fight, then fight
    if (promptFight === "f" || promptFight === "F") { 
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  
        for(var i = 0; i < enemyName.length; i++) {
            console.log(i, enemyName[i]);
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName[i] + " attacked " + enemyName[i] + ". " + enemyName[i] + " now has " + enemyHealth + " health remaining."
            );

            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName[i] + " has died!");
            } else {
                window.alert(enemyName[i] + " still has " + enemyHealth + " health left.");
            }

            // remove player's health by subtracting the amount set in the enemyAttack variable
            // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
            playerHealth = playerHealth - enemyAttack;
            console.log(
                enemyName[i] + " attacked " + playerName[i] + ". " + playerName[i] + " now has " + playerHealth + " health remaining."
            );
        
            // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName[i] + " has died!");
            } else {
                window.alert(playerName[i] + " still has " + playerHealth + " health left.");
            } 
        }
    // if player choses to skip
    } else if (promptFight === "s" || promptFight === "S") {
        window.alert(playerName[i] + " has chosen to skip the fight!");
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }

};

fight();