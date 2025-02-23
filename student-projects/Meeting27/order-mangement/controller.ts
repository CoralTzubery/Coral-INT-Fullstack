import { getOrders, addOrder, deleteOrder, updateOrder, loadOrders } from "./model.js";
import { renderOrders } from "./view.js";

export function initalizeOrderPage(): void {
    loadOrders();
    renderOrders(getOrders());

    document.querySelector(".order-list")?.addEventListener("click", (event) => {
        const target = event.target as HTMLElement;

        if (target.classList.contains("delete")) {
            const id = Number(target.dataset.id);
            deleteOrder(id);
            renderOrders(getOrders());
        }

        if (target.classList.contains("edit")) {
            const id = Number(target.dataset.id);
            updateOrder(id, "in-progress");
            renderOrders(getOrders());
        }
    });
}

export function initalizeOrderForm(): void {
    document.querySelector("form")?.addEventListener("submit", (event) => {
        event.preventDefault();

        const nameInput = document.getElementById("nameInput") as HTMLInputElement;
        const itemsInput = document.getElementById("itemsInput") as HTMLInputElement;
        const statusDropdown = document.getElementById("statusDropdown") as HTMLSelectElement;

        if (!nameInput || !itemsInput || !statusDropdown) return;

        addOrder(
            nameInput.value,
            itemsInput.value.split(","),
            statusDropdown.value
        );

        window.location.href="index.html";
    });
}