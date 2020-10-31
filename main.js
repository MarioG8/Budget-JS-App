// Select Elements

const balanceEl = document.querySelector('.balance .value');
const incomeTotalEl = document.querySelector('.income-total');
const outcomeTotalEl = document.querySelector('.outcome-total');
const incomeEl = document.querySelector('#income');
const expenseEl = document.querySelector('#expense');
const allEl = document.querySelector('#all');
const incomeList = document.querySelector('#income .list');
const expenseList = document.querySelector('#expense .list');
const allList = document.querySelector('#all .list');


// Select Btns
const expenseBtn = document.querySelector('.tab1');
const incomeBtn = document.querySelector('.tab2');
const allBtn = document.querySelector('.tab3');

// Select Inputs 
const addExpense = document.querySelector('.add-expense');
const expenseTitle = document.getElementById('expense-title-input');
const expenseAmount = document.getElementById('expense-amount-input');

const addIncome = document.querySelector('.add-expense');
const incomeTitle = document.getElementById('expense-title-input');
const incomeAmount = document.getElementById('expense-amount-input');

// Variables 
let ENTRY_LIST = [];
let balance = 0, income = 0, outcome = 0;

const DELETE = 'delete', EDIT = 'edit';

// EventListeners
expenseBtn.addEventListener('click', () => {
    show(expenseEl);
    hide([incomeEl, allEl]);
    active(expenseBtn);
    inactive([incomeBtn, allBtn]);
});
incomeBtn.addEventListener('click', () => {
    show(incomeEl);
    hide([expenseEl, allEl]);
    active(incomeBtn);
    inactive([expenseBtn, allBtn]);
});
allBtn.addEventListener('click', () => {
    show(allEl);
    hide([incomeEl, expenseEl]);
    active(allBtn);
    inactive([incomeBtn, expenseBtn]);
});


addExpense.addEventListener('click', () => {
    // If even one is empty => exit 
    if (!expenseTitle.value || !expenseAmount.value) return;

    // Save the entry to entry list 
    let expense = {
        type: 'expense',
        title: expenseTitle.value,
        amount: expenseAmount.value
    }
    ENTRY_LIST.push(expense);

    updateUI();
    clearInput([expenseTitle, expenseAmount])
});

addIncome.addEventListener('click', () => {
    // If even one is empty => exit 
    if (!incomeTitle.value || !incomeAmount.value) return;

    // Save the entry to entry list 
    let income = {
        type: 'income',
        title: incomeTitle.value,
        amount: incomeAmount.value
    }
    ENTRY_LIST.push(income);

    updateUI();
    clearInput([incomeTitle, incomeAmount])
});


// Show/Hide Active/Inactive HelperFunc 
function updateUI() {
    income = calcTotal('income', ENTRY_LIST);
    outcome = calcTotal('outcome', ENTRY_LIST);
    balance = calcBalance(income, outcome);

    // Update UI 
    clearElement([expenseList, incomeList, allList]);

    // Determine sign of balance 
    let sign = (income >= outcome) ? '$' : '-$';

    ENTRY_LIST.forEach((entry, index) => {
        if (entry.type == 'expense') {
            showEntry(expenseList, entry.type, entry.title, entry.amount, index)
        } else if (entry.type == 'income') {
            showEntry(incomeList, entry.type, entry.title, entry.amount, index)
        }
        showEntry(allList, entry.type, entry.amount, index)
    });
}

function showEntry(list, type, title, amount, id) {

    const entry = ` <li id = "${id}" class="${type}">
                        <div class="entry">${title}: $${amount}</div>
                        <div id="edit"></div>
                        <div id="delete"></div>
                    </li>`;

    const position = "afterbegin";

    list.insertAdjacentHTML(position, entry);
}

function clearElement(elements) {
    elements.forEach(element => {
        element.innerHTML = '';
    });
}

function calcTotal(type, list) {
    let sum = 0;

    list.forEach(entry => {
        if (entry.type == type) {
            sum += entry.amount;
        }
    });

    return sum;
}

function calcBalance(income, outcome) {
    return income - outcome;
}

function clearInput(inputs) {
    inputs.forEach(input => {
        input.value = '';
    });
}

function show(element) {
    element.classList.remove('hide');
}

function hide(elements) {
    elements.forEach(element => {
        element.classList.add('hide');
    });
}


function active(element) {
    element.classList.add('active');
}

function inactive(elements) {
    elements.forEach(element => {
        element.classList.remove('active');
    });
}