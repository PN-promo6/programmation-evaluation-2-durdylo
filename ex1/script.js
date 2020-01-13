let fishlist = [
  ["Ordre","Famille","Nom vernaculaire","Nom binomial"],
  ["Aulopiformes","Synodontidae","Poisson lézard","Synodus saurus"],
  ["Aulopiformes","Anguilliformes","Anguille","Anguilla anguilla"],
  ["Aulopiformes","Congridae","Congre","	Conger conger"],
  ["Atheriniformes","Atherinidae","Joël","	Atherina boyeri"]
]

// creating a function to display a table in the web browser

function createTableHTML(array) {
  let i=0
  let j=0
  let k=0
  let currentElement;
  let currentElement2;
  let headerData= array[0]

  let newTable = document.createElement("table");
  document.body.appendChild(newTable);

  let newTableBody = document.createElement("tbody");
  newTable.appendChild(newTableBody);

  let newTableHead = document.createElement("thead")
  newTable.appendChild(newTableHead)

  let newTableHeadRow = document.createElement("tr")
  newTableHead.appendChild(newTableHeadRow)

  while (k < headerData.length) {
    currentElement3 = headerData[k]
    let newTableHeadData =document.createElement("th")
    newTableHeadData.textContent= currentElement3
    newTableHeadRow.appendChild(newTableHeadData)
    k++
  }

  while (i<array.length) {
    currentElement = array[i]
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
