// Step 1: Create an array of players
let teamIndia = ["Rohit", "Gill", "Virat", "Shreyas", "KLRahul"];
console.log("Initial team:", teamIndia);
// Output: Initial team: ["Rohit", "Gill", "Virat", "Shreyas", "KLRahul"]

// Step 2: Add a player to the end of the array
teamIndia.push("Pant");
console.log("After adding Pant:", teamIndia);
// Output: After adding Pant: ["Rohit", "Gill", "Virat", "Shreyas", "KLRahul", "Pant"]

// Step 3: Remove a player from the end of the array
teamIndia.pop();
console.log("After removing the last player:", teamIndia);
// Output: After removing the last player: ["Rohit", "Gill", "Virat", "Shreyas", "KLRahul"]

// 👉 What's happening?
// ✅ push("Surya") adds Surya Kumar Yadav to the team.
// ✅ pop() removes the last player (Surya) because he got injured.

// Chapter 2: Choosing the Right Opening Pair (shift() & unshift())

// Scene: Who Will Open the Batting?

// India needs a strong opening pair. If an opener is struggling, we must replace him with another batter.

// Understanding shift() and unshift()

// shift() 👉 Removes the first player (opener).

// unshift() 👉 Adds a new opener to the start.

//   Example: Replacing Gill with Jaiswal

// Step 1: Create an array of openers
let openers = ["Gill", "Rohit"];
console.log("Initial openers:", openers);
// Output: Initial openers: ["Gill", "Rohit"]

// Step 2: Replace Gill with Jaiswal
openers.shift();
console.log("After removing Gill:", openers);
// Output: After removing Gill: ["Rohit"]

// Step 3: Add Jaiswal as a new opener
openers.unshift("Jaiswal");
console.log("After adding Jaiswal:", openers);
// Output: After adding Jaiswal: ["Jaiswal", "Rohit"]

// Chapter 3: Fixing the Middle Order (splice())

// Scene: Finding the Best No.4 Batsman

// The No.4 spot is crucial, but with multiple options available, the selectors have a tough task. Injuries and inconsistent form create a need for rotation, and it’s time to decide who’s the best fit.

// Understanding splice()

// splice(index, howMany, newItem) 👉 Removes & adds players at a specific position.

// Example: Replacing Shreyas Iyer with SKY

// Step 1: Create an array of middle-order batsmen
let middleOrder = ["Virat", "Shreyas", "KLRahul"];
console.log("Initial middle order:", middleOrder);
// Output: Initial middle order: ["Virat", "Shreyas", "KLRahul"]

// Step 2: Replace Shreyas with SKY
middleOrder.splice(1, 1, "SKY"); // Remove 1 element at index 1 and add SKY
console.log("After replacing Shreyas with SKY:", middleOrder);
// Output: After replacing Shreyas with SKY: ["Virat", "SKY", "KLRahul"]

// 👉 What's happening?
// ✅ splice(1, 1, "SKY") removes Shreyas and adds Surya Kumar Yadav at index 1.

// Chapter 4: Selecting the Playing XI (slice())

// Scene: Only 11 Can Play!

// From a 15-member squad, only 11 players can be selected for the big game. It’s a tough call and only the best fit for the team!

// Understanding slice()

// slice(start, end) 👉 Extracts a portion of an array without modifying it.

// Example: Selecting the Final XI

// Step 1: Create an array of 15 players
let squad = [
  "Rohit",
  "Jaiswal",
  "Virat",
  "SKY",
  "Pant",
  "Shivam Dubey",
  "Hardik",
  "Jadeja",
  "Bumrah",
  "Shami",
  "Arshdeep",
  "Chahal",
  "Siraj",
  "Gill",
  "Kuldeep",
];
console.log("Initial squad:", squad);
// Output: Initial squad: ["Rohit", "Jaiswal", "Virat", "SKY", "Pant", "Shivam Dubey", "Hardik", "Jadeja", "Bumrah", "Shami", "Arshdeep", "Chahal", "Siraj", "Gill", "Kuldeep"]

// Step 2: Select the final XI
let playingXI = squad.slice(0, 11); // Extract the first 11 players
console.log("Final XI:", playingXI);
// Output: Final XI: ["Rohit", "Jaiswal", "Virat", "SKY", "Pant", "Shivam Dubey", "Hardik", "Jadeja", "Bumrah", "Shami", "Arshdeep"]

// 👉 What's happening?
// ✅ slice(0, 11) extracts the first 11 players from the squad array.

// Chapter 5: Improving Players' Strike Rates (map())

// Scene: Boosting Player Performance

// The batting coach is on a mission: Every player needs to increase their strike rate by 15% before the knockout games. The pressure is on to ramp up the aggression and deliver those big hits!

// Understanding map()

// map() 👉 Applies a function to all elements in an array.

// Example: Increasing Strike Rates by 15%

// Step 1: Create an array of players with their strike rates
// let players = [
//   { name: "Rohit", strikeRate: 120 },
//   { name: "Jaiswal", strikeRate: 130 },
//   { name: "Virat", strikeRate: 120 },
//   { name: "SKY", strikeRate: 150 },
// ];
// console.log("Initial strike rates:", players);

// // Output: Initial strike rates: [
// // { name: 'Rohit', strikeRate: 120 },
// // { name: 'Jaiswal', strikeRate: 130 },
// // { name: 'Virat', strikeRate: 120 },
// // { name: 'SKY', strikeRate: 150 }
// // ]

// // Step 2: Increase strike rates by 15% using map()
// let updatedPlayers = players.map(function (player) {
//   return { name: player.name, strikeRate: player.strikeRate * 1.15 };
// });
// console.log("Updated strike rates:", updatedPlayers);

// Output: Updated strike rates: [
// { name: 'Rohit', strikeRate: 138 },
// { name: 'Jaiswal', strikeRate: 149.5 },
// { name: 'Virat', strikeRate: 138 },
// { name: 'SKY', strikeRate: 172.5 }
// ]

// 👉 What's happening?
// ✅ map() increases each player's strike rate by 15%.

// Chapter 6: Finding Power Hitters (filter())

// Scene: Selecting the Death Overs Finishers🎯

// The analyst is searching for the most destructive batters—those who can take the game away in just a few balls! Only those with a strike rate above 150 will be considered for the death overs.

// Understanding filter()

// 🔹 filter() – Extracts only the elements that meet a specific condition.

// Example: Players with above 150 strike rates

// Step 1: Create an array of players with their strike rates
let players = [
  { name: "SKY", strikeRate: 172.5 },
  { name: "Pant", strikeRate: 160 },
  { name: "Hardik", strikeRate: 145 },
  { name: "Jadeja", strikeRate: 140 },
  { name: "Shivam Dubey", strikeRate: 170 },
];
console.log("Initial players:", players);

// Output: Initial players: [
// { name: 'SKY', strikeRate: 172.5 },
// { name: 'Pant', strikeRate: 160 },
// { name: 'Hardik', strikeRate: 145 },
// { name: 'Jadeja', strikeRate: 140 },
// { name: 'Shivam Dubey', strikeRate: 170 }
// ]

// Step 2: Filter players with a strike rate above 150
let powerHitters = players.filter(function (player) {
  return player.strikeRate > 150;
});
console.log("Power hitters:", powerHitters);

// Output: Power hitters: [
// { name: 'SKY', strikeRate: 172.5 },
// { name: 'Pant', strikeRate: 160 },
// { name: 'Shivam Dubey', strikeRate: 170 }
// ]

// 👉 What's happening?
// ✅ filter() selects players with a strike rate greater than 150.

// Chapter 7: Finding the First Fifty (find())

// Scene: The Crucial Knock

// Every great innings starts with a solid foundation. The team needs someone to step up and score the first fifty—who will be the one to steady the ship?

// Understanding find()

// 🔹 find() helps in identifying the first player in an inning who reaches a specific milestone.
// 🔹 It stops searching as soon as it finds the first batter to score 50+ runs.
// 🔹 In a real match, it’s like the scoreboard flashing "First Fifty!" as soon as a batter reaches the milestone.

// Example: Finding the First Fifty

// Step 1: Create an array of scores
let scores = [
  { player: "Rohit", runs: 20 },
  { player: "Jaiswal", runs: 53 },
  { player: "Virat", runs: 40 },
  { player: "SKY", runs: 30 },
];
console.log("Scores:", scores);

// Output: Scores: [
// { player: 'Rohit', runs: 20 },
// { player: 'Jaiswal', runs: 53 },
// { player: 'Virat', runs: 40 },
// { player: 'SKY', runs: 30 }
// ]

// Step 2: Find the first player to score fifty or more runs using find()
let fiftyPlus = scores.find(function (score) {
  return score.runs >= 50;
});
console.log("First fifty:", fiftyPlus);

// Output: First fifty: { player: 'Jaiswal', runs: 53 }

// 👉 What's happening?
// ✅ find() identifies the first player to score 50+ runs in the match.

// Chapter 8: Teamwork in Action (forEach())

// Scene: Everyone Plays Their Part

// After Jaiswal scored the first fifty and got the team on the right track, it’s time for the whole team to step up. The game isn’t won by one player alone—every player needs to contribute for the team to succeed.

// Understanding forEach()

// 🔹 forEach() – While find() helped us spot the first player to reach fifty, forEach() ensuring that every player had a chance to play their part and help the team.
// 🔹 Think of forEach() like when the whole team works together, and each player does something to help—whether it’s scoring runs, stopping a ball, or keeping the momentum going. Everyone plays a role in moving the team forward.

// Example: Everyone Contributes

// Step 1: Create an array of 7 team players with their scores in the match
let teamScores = [
  { player: "Rohit", runs: 40 },
  { player: "Jaiswal", runs: 53 },
  { player: "Virat", runs: 90 },
  { player: "SKY", runs: 75 },
  { player: "Pant", runs: 60 },
  { player: "Hardik", runs: 25 },
  { player: "Jadeja", runs: 18 },
];
console.log("Team scores:", teamScores);

// Output: Team scores: [
// { player: 'Rohit', runs: 40 },
// { player: 'Jaiswal', runs: 53 },
// { player: 'Virat', runs: 90 },
// { player: 'SKY', runs: 75 },
// { player: 'Pant', runs: 60 },
// { player: 'Hardik', runs: 25 },
// { player: 'Jadeja', runs: 18 }
// ]

// Step 2: Calculate the total runs scored by the team using forEach()
let totalRuns = 0;
teamScores.forEach(function (player) {
  totalRuns += player.runs;
});
console.log("Total runs scored by the team:", totalRuns);

// Output: Total runs scored by the team: 361

// 👉 What's happening?
// ✅ forEach() helps in calculating the total runs scored by the team.
