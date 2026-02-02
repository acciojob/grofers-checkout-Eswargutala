const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	// Get all price elements
const prices = document.querySelectorAll(".price");

let total = 0;

// Calculate total
prices.forEach(price => {
  total += Number(price.textContent);
});

// Get table
const table = document.querySelector("table");

// Create new row
const row = document.createElement("tr");

// Create single cell with required id
const cell = document.createElement("td");
cell.id = "ans";
cell.colSpan = 2;
cell.textContent = total;

// Append cell to row
row.appendChild(cell);

// Append row to table
table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);

