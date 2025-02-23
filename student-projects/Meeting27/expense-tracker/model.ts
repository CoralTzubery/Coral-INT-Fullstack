type Expense = {
    id: string,
    title: string,
    date: string, 
    amount: number,
    category: string,
}

let expenses: Expense[] = [];
let onExpensesUpdateCallbacks: (() => void)[] = [];

export function getExpenses(): Expense[] {
    return expenses;
    //showing all the expenses in the array
}

export function addExpense(expense: Expense) { 
    //adding a new expense to the array from the form create button
}

export function deleteExpense(expenseId: string) {
    //deleting a chosing expense (bt it's id)
}

export function categorySummary(category:string) {
    //calculating the expense by a chosen category
}

export function timeSummary(time: string) {
    //calculating the expense for a chosen period of time
}

export function onExpensesUpdate(callback: () => void) {
    onExpensesUpdateCallbacks.push(callback);
}

export function callExpensesUpdateCallbacks() {
    onExpensesUpdateCallbacks.forEach((callback) => callback());
}

export function saveExpense() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

export function loadExpenses() {
    const data = localStorage.getItem("expenses");
    
    if (data) {
        expenses = JSON.parse(data);
    }
}