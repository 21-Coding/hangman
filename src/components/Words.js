var team_names = [
  "sixers",
  "blazers",
  "lakers",
  "clippers",
  "nets",
  "hornets",
  "kings",
  "suns",
  "raptors",
  "pistons",
  "jazz",
  "wizards",
  "warriors",
  "bulls",
  "celtics",
  "kings",
  "knicks",
  "heat",
  "bucks",
  "nuggets",
  "spurs",
  "rockets",
  "pelicans",
  "hawks",
  "magic",
  "cavaliers"

]

function randomTeam() {
  return team_names[Math.floor(Math.random() * team_names.length)]
}

export { randomTeam }