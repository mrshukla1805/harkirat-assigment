/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let categoryTotals = {};

for (let i = 0; i < transactions.length; i += 1) {
  var transaction = transactions[i];

  if (categoryTotals[transaction.category]) {
    categoryTotals[transaction.category] = (categoryTotals[transaction.category] + transaction.price);
  } else {
    categoryTotals[transaction.category] = transaction.price;
  }
}

let categoryNames = Object.keys(categoryTotals);

let resultArray = [];
for (let i = 0; i < categoryNames.length; i += 1) {
  let categoryName = categoryNames[i];
  resultArray.push({ category: categoryName, totalSpent: categoryTotals[categoryName] });
}

return resultArray;


}

module.exports = calculateTotalSpentByCategory;
