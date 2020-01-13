let fishlist = [
  ["Aulopiformes","Synodontidae","Poisson lézard","Synodus saurus"],
  ["Aulopiformes","Anguilliformes","Anguille","Anguilla anguilla"],
  ["Aulopiformes","Congridae","Congre","	Conger conger"],
  ["Atheriniformes","Atherinidae","Joël","	Atherina boyeri"]
]

// creating a function to display a table in the web browser

function createTableHTML(array) {
  let i=0
  let j=0
  let currentElement
  let currentElement2

  let newTable = document.createElement("table");
  document.body.appendChild(newTable);

  let newTableBody = document.createElement("tbody");
  newTable.appendChild(newTableBody);


  while (i<array.length) {
    currentElement =array[i]
    let newTableRow = document.createElement("tr")
    newTableBody.appendChild(newTableRow)
    j=0
    while (j<currentElement.length) {
      currentElement2=currentElement[j]
      let newTableData=document.createElement("td")
      newTableData.textContent=currentElement2
      newTableRow.appendChild(newTableData)
      j++
    }
    i++
  }
}
createTableHTML(fishlist)
