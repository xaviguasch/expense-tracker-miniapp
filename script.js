const balance = document.getElementById('balance')
const money_plus = document.getElementById('money-plus')
const money_minus = document.getElementById('money-minus')
const list = document.getElementById('list')
const form = document.getElementById('form')
const text = document.getElementById('text')
const amount = document.getElementById('amount')

const dummyTransactions = [
  { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 }
]

let transactions = dummyTransactions

// Add transactions to DOM list
function addTransactionDOM(transaction) {
  // Get sign
  const sign = transaction.amount < 0 ? '-' : '+'

  const item = document.createElement('li')

  // Add class based on value
  item.classList.add(sign === '+' ? 'plus' : 'minus')

  // Add text
  item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs(
    transaction.amount
  )}</span> <button class="delete-btn">x</button>
  `

  console.log(item)

  // Add it to the DOM list
  list.appendChild(item)
}

// Update the balance, income and expense
function updateValues() {
  // const positiveTrans = transactions.filter(tr => tr.amount > 0)
  // const totalTransPositive = positiveTrans.reduce((acc, trans) => acc + trans.amount, 0)
  // money_plus.innerText = totalTransPositive

  const amounts = transactions.map(transaction => transaction.amount)

  const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2)

  const income = amounts
    .filter(amount => amount > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2)

  const expense = amounts
    .filter(amount => amount < 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2)

  // displays the total balance
  balance.innerText = `$${total}`
  // displays the income
  money_plus.innerText = `$${income}`
  // displays the expense
  money_minus.innerText = `$${expense}`
}

// Init app
function init() {
  list.innerHTML = ''
  transactions.forEach(dummy => addTransactionDOM(dummy))

  updateValues()
}

init()
