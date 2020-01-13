
// cre
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
