let expenses = [];
let onExpensesUpdateCallbacks = [];
export function getExpenses() {
    return expenses;
    //showing all the expenses in the array
}
export function addExpense(expense) {
    //adding a new expense to the array from the form create button
}
export function deleteExpense(expenseId) {
    //deleting a chosing expense (bt it's id)
}
export function categorySummary(category) {
    //calculating the expense by a chosen category
}
export function timeSummary(time) {
    //calculating the expense for a chosen period of time
}
export function onExpensesUpdate(callback) {
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
