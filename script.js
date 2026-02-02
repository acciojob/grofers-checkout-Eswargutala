const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll(".price");

let total = 0;

// Calculate total
prices.forEach(p => {
  total += Number(p.textContent);
});

// Get the table
const table = document.querySelector("table");

// Create a new row
const totalRow = document.createElement("tr");

// Create a single cell
const totalCell = document.createElement("td");
totalCell.colSpan = 2;
totalCell.textContent = "Total Price: " + total;

// Append cell to row
totalRow.appendChild(totalCell);

// Append row to table
table.appendChild(totalRow);
  
};

getSumBtn.addEventListener("click", getSum);

