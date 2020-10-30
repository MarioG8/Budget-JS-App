// Select Elements

const balanceEl = document.querySelector('.balance .value');
const incomeTotalEl = document.querySelector('.income-total');
const outcomeTotalEl = document.querySelector('.outcome-total');
const incomeEl = document.querySelector('#income');
const expenseEl = document.querySelector('#expense');
const allEl = document.querySelector('#all');
const incomeList = document.querySelector('#income .list');
const expenseList = document.querySelector('#outcome .list');
const allList = document.querySelector('#all .list');


// Select Btns
const expenseBtn = document.querySelector('.tab1');
const incomeBtn = document.querySelector('.tab2');
const allBtn = document.querySelector('.tab3');

// Select Inputs 
const addExpense = document.querySelector('.add-expense');
const expenseTitle = document.qetElementById('expense-title-input');
const expenseAmount = document.qetElementById('expense-amount-input');

const addIncome = document.querySelector('.add-expense');
const incomeTitle = document.qetElementById('expense-title-input');
const incomeAmount = document.qetElementById('expense-amount-input');

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