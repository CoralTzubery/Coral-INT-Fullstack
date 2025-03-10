import { addExpense } from "./model.js";
export function onAddExpenseSumbit(formData) {
    const rawTitle = formData.get("title");
    const rawDate = formData.get("date");
    const rawAmonut = formData.get("amount");
    const rawCategory = formData.get("category");
    if (typeof rawTitle !== "string") {
        throw new Error("Title must be a string");
    }
    if (typeof rawDate !== "string") {
        throw new Error("Date must be a string");
    }
    if (typeof rawDate !== "string") {
        throw new Error("Amount must be a string");
    }
    if (typeof rawCategory !== "string") {
        throw new Error("Category must be a string");
    }
    const title = rawTitle.trim();
    const date = rawDate.trim();
    const amount = Number(rawAmonut);
    const category = rawCategory.trim();
    addExpense({
        id: crypto.randomUUID().replaceAll("-", "").slice(-8),
        title,
        date,
        amount,
        category,
    });
}
