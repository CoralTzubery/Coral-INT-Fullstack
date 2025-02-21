let orders = [];
export function getOrders() {
    return orders;
}
export function addOrder(customerName, items, status) {
    const newOrder = {
        id: orders.length + 1,
        customerName,
        items,
        status
    };
    orders.push(newOrder);
    saveOrders();
}
export function deleteOrder(id) {
    orders = orders.filter(order => order.id !== id);
    saveOrders();
}
export function updateOrder(id, status) {
    const order = order.find(order => order.id === id);
    if (order) {
        order.status = status;
        saveOrders();
    }
}
export function saveOrders() {
    localStorage.setItem("orders", JSON.stringify(orders));
}
export function loadOrders() {
    const data = localStorage.getItem("orders");
    if (data) {
        orders = JSON.parse(data);
    }
}
