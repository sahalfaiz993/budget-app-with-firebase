// const totalIncomeElement = document.getElementById('totalincome');
// const totalExpensesElement = document.getElementById('totalexpenses');
// const balanceElement = document.getElementById('balance');
// const transactionListElement = document.getElementById('transaction-list');
// const totalIncomeInput = document.getElementById('totalincome-input');
// const totalExpensesInput = document.getElementById('totalexpenses-input');
// const descriptionInput = document.getElementById('description');
// const amountInput = document.getElementById('amount');
// const typeInput = document.getElementById('type');
// const addButton = document.getElementById('add-btn');

// let totalIncome = 0;
// let totalExpenses = 0;
// let balance = 0;
// let transactions = [];

// function updateBudget() {
//     totalIncomeElement.textContent = totalIncome.toFixed(2);
//     totalExpensesElement.textContent = totalExpenses.toFixed(2);
//     balance = totalIncome - totalExpenses;
//     balanceElement.textContent = balance.toFixed(2);
// }

// function addTransaction(description, amount, type) {
//     const transaction = { description, amount, type };
//     transactions.push(transaction);

//     const listItem = document.createElement('li');
//     listItem.classList.add(type);
//     listItem.innerHTML = `
//         <span>${description}</span>
//         <span>$${amount.toFixed(2)}</span>
//     `;

//     transactionListElement.appendChild(listItem);
// }

// function addTransactionHandler() {
//     const description = descriptionInput.value.trim();
//     const amount = parseFloat(amountInput.value);
//     const type = typeInput.value;

//     if (!description || isNaN(amount) || amount === 0) {
//         alert('Please enter a valid description and amount.');
//         return;
//     }

//     addTransaction(description, amount, type);

//     if (type === 'income') {
//         totalIncome += amount;
//     } else {
//         totalExpenses += amount;
//     }

//     updateBudget();

//     // Clear the input fields
//     descriptionInput.value = '';
//     amountInput.value = '';
// }

// addButton.addEventListener('click', addTransactionHandler);
