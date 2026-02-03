function getTotalPrice() {
  const prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach(price => {
    total += Number(price.textContent);
  });

  const table = document.getElementById("groceryTable");

  // Prevent adding total row multiple times
  if (document.getElementById("totalRow")) return;

  const row = document.createElement("tr");
  row.id = "totalRow";

  const itemCell = document.createElement("td");
  itemCell.textContent = "Total";
  itemCell.style.fontWeight = "bold";

  const priceCell = document.createElement("td");
  priceCell.textContent = total;
  priceCell.style.fontWeight = "bold";

  row.appendChild(itemCell);
  row.appendChild(priceCell);

  table.appendChild(row);
}

};

getSumBtn.addEventListener("click", getSum);

