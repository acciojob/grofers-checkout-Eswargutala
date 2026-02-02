const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll(".price");

	let total = 0;

	prices.forEach(price => {
		total += Number(price.textContent);
	});

	const table = document.querySelector("table");

	const totalRow = document.createElement("tr");

	const totalItemCell = document.createElement("td");
	totalItemCell.textContent = "Total";

	totalRow.appendChild(totalItemcell);
	totalRow.appendChild(totalPriceCell);

	table.appendChild(totalRow);
  
};

getSumBtn.addEventListener("click", getSum);

