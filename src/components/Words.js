var team_names = [
  "Sixers",
  "Blazers",
  "Lakers",
  "Clippers",
  "Nets",
  "Hornets",
  "Kings",
  "Suns",
  "Raptors",
  "Pistons",
  "Jazz",
  "Wizards",
  "Warriors",
  "Bulls",
  "Celtics",
  "Kings",
  "Knicks",
  "Heat",
  "Bucks",
  "Nuggets",
  "Spurs",
  "Rockets",
  "Pelicans",
  "Hawks",
  "Magic",
  "Cavaliers"

]

function randomTeam() {
  return team_names[Math.floor(Math.random() * team_names.length)]
}

export { randomTeam }