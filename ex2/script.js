// create funtion for display "interface" in the web browser
function movieWebsiteHomepage() {
  let newSection = document.createElement("section")
  document.body.appendChild(newSection);
  newSection.id = 'homePage'

  let newTitle = document.createElement("h1")
  newTitle.textContent = "Cinema Le Dauphin"
  newSection.appendChild(newTitle)

  let newPara = document.createElement("p")
  newPara.textContent = "Une salle de cinéma grand confort, un restaurant et une sélection de de qulité. Des avant prmières, des rencontres, des ciné-repas, des débats, des ateliers, des ciné-goùters, de 11h30 à 23h du mardi au dimanche (jusqu'à minuit le vendredi et le samedi)"
  newSection.appendChild(newPara)

  let newButton = document.createElement("button")

  newButton.textContent = "Voir les films à l'affiche cette semaine"
  newSection.appendChild(newButton)
  newButton.id = 'nextButton'

}

movieWebsiteHomepage()


let infoMovies = [
  ["Titre du film", "Réalisateur", "Nationalité", "Année", "Durée", "Version"],
  ["IN MY ROOM", "Ulrich Köler", "Allemagne", "2019", "2h", "vf"],
  ["UN VIOLENT DÉSIR DE BONHEUR", "Clément Schneider", "France", "2018", "1h15", "vf"],
  ["WHAT YOU GONNA DO WHEN THE WORLD'S ON FIRE", "Roberto Minervini", "Etats-Unis/Italie", "2018", "2h03", "vostfr"],
  ["GRASS", "Hong Sang-Soo", "Corée du Sud", "2018", "1h06", "vostfr"]
]

function displayInfoOfMovies(array) {
  let i = 1
  let j = 0
  let k = 0
  let currentElement
  let currentElement2
  let currentElement3
  let headerData = array[0]

  let newTable = document.createElement("table");
  document.body.appendChild(newTable);
  newTable.id = 'infoMoviesTable'

  let newTableHead = document.createElement("thead")
  newTable.appendChild(newTableHead)

  let newTableHeadRow = document.createElement("tr")
  newTableHead.appendChild(newTableHeadRow)

  let newTableBody = document.createElement("tbody");
  newTable.appendChild(newTableBody);

  while (k < headerData.length) {
    currentElement3 = headerData[k]
    let newTableHeadData = document.createElement("th")
    newTableHeadData.textContent = currentElement3
    newTableHeadRow.appendChild(newTableHeadData)
    k++
  }
  i = 1
  while (i < array.length) {
    currentElement = array[i]
    let newTableRow = document.createElement("tr")
    newTableBody.appendChild(newTableRow)
    j = 0
    while (j < currentElement.length) {
      currentElement2 = currentElement[j]
      let newTableData = document.createElement("td")
      newTableData.textContent = currentElement2
      newTableRow.appendChild(newTableData)
      j++
    }
    i++
  }

}
displayInfoOfMovies(infoMovies)

let buttonNext = document.getElementById('nextButton')
let homePage = document.getElementById('homePage')
let infoMoviesTable = document.getElementById('infoMoviesTable')
infoMoviesTable.style.display = ("none")

buttonNext.addEventListener("click", function() {
  homePage.style.display = ("none")
  infoMoviesTable.style.display = ("block")
}, );
