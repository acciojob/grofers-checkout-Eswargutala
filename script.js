const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	function addTotalRow() {
  const totalValue = calculateTotalPrice();
  const table = document.getElementsByTagName('table')[0]; // Assumes there is one table

  // Create new row
  const newRow = document.createElement('tr');
  
  // Create a single cell that spans all columns (assuming 2 columns here for simplicity, adjust 'colspan' as needed)
  const totalCell = document.createElement('td');
  totalCell.setAttribute('colspan', '2'); // Adjust this number based on your actual table column count
  totalCell.textContent = 'Grand Total: ' + totalValue;

  // Add the cell to the row and the row to the table
  newRow.appendChild(totalCell);
  
  // Check if tfoot exists, otherwise append to the end of the table
  let tfoot = table.tFoot;
  if (!tfoot) {
    tfoot = document.createElement('tfoot');
    table.appendChild(tfoot);
  }
  tfoot.appendChild(newRow); // Appends the new total row
}

// Call the function to perform the calculation and display the total
addTotalRow();
  
};

getSumBtn.addEventListener("click", getSum);

