const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const priceElements = document.querySelectorAll(".price");

  let totalPrice = 0;

  // Calculate total price
  priceElements.forEach(price => {
    totalPrice += parseInt(price.textContent);
  });

  // Get table
  const table = document.querySelector("table");

  // Create new row for total
  const totalRow = document.createElement("tr");

  const totalItem = document.createElement("td");
  totalItem.textContent = "Total";

  const totalValue = document.createElement("td");
  totalValue.textContent = totalPrice;

  // Append cells to row
  totalRow.appendChild(totalItem);
  totalRow.appendChild(totalValue);

  // Append row to table
  table.appendChild(totalRow);
  
};

getSumBtn.addEventListener("click", getSum);

