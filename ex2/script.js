
// create funtion for display "interface" in the web browser
function movieWebsiteHomepage() {
  let newSection = document.createElement("section")
  document.body.appendChild(newSection);

  let newTitle = document.createElement("h1")
  newTitle.textContent="Cinema Le Dauphin"
  newSection.appendChild(newTitle)

  let newPara = document.createElement("p")
  newPara.textContent="Une salle de cinéma grand confort, un restaurant et une sélection de de qulité. Des avant prmières, des rencontres, des ciné-repas, des débats, des ateliers, des ciné-goùters, de 11h30 à 23h du mardi au dimanche (jusqu'à minuit le vendredi et le samedi)"
  newSection.appendChild(newPara)

  let newButton = document.createElement("button")
  newButton.textContent="Voir les films à l'affiche cette semaine"
  newSection.appendChild(newButton)
}
movieWebsiteHomepage()


let infoMovies =[
  ["Titre du film", "Réalisateur", "Nationalité", "Année", "Durée","Version"],
  ["IN MY ROOM", "Ulrich Köler", "Allemagne", "2019", "2h", "vf"],
  ["UN VIOLENT DÉSIR DE BONHEUR", "Clément Schneider", "France","2018","1h15","vf"],
  ["WHAT YOU GONNA DO WHEN THE WORLD'S ON FIRE", "Roberto Minervini", "Etats-Unis/Italie", "2018","2h03","vostfr"],
  ["GRASS", "Hong Sang-Soo", "Corée du Sud","2018","1h06","vostfr"]
]

function displayInfoOfMovies(array){
  
}
