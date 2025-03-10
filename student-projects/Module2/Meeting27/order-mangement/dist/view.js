export function renderOrders(orders) {
    const orderList = document.querySelector(".order-list");
    if (!orderList)
        return;
    while (orderList.firstChild) {
        orderList.removeChild(orderList.firstChild);
    }
    const header = document.createElement("li");
    header.className = "order-header";
    ["#", "Cutomer", "Items", "Status", "Actions"].forEach(text => {
        const p = document.createElement("p");
        p.textContent = text;
        header.appendChild(p);
    });
    orders.forEach(order => {
        const orderItem = document.createElement("li");
        orderItem.className = "order-item";
        const id = document.createElement("p");
        id.textContent = String(order.id);
        const customer = document.createElement("p");
        customer.textContent = order.customerName;
        const items = document.createElement("p");
        items.textContent = order.items.join(", ");
        const status = document.createElement("p");
        status.textContent = order.status;
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit";
        editBtn.dataset.id = String(order.id);
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.className = "delete";
        deleteBtn.dataset.id = String(order.id);
        orderItem.append(id, customer, items, status, editBtn, deleteBtn);
        orderList.appendChild(orderItem);
    });
}
