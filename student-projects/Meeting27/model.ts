type Order = {
    id: number,
    customerName: string,
    items: string[],
    status: string,
};

let orders: Order[] = [];

export function getOrders(): Order[] {
    return orders;
}

export function addOrder(customerName: string, items: string[], status: string): void {
    const newOrder: Order = {
        id: orders.length + 1,
        customerName,
        items,
        status
    };
    
    orders.push(newOrder);
    saveOrders();
}

export function deleteOrder(id: number): void {
    orders = orders.filter(order => order.id !== id);
    saveOrders();
}

export function updateOrder(id: number, status: string): void {
    const order = order.find(order => order.id === id);
    
    if(order) {
        order.status = status;
        saveOrders();
    }
}

export function saveOrders(): void {
    localStorage.setItem("orders", JSON.stringify(orders));
}

export function loadOrders(): void {
    const data = localStorage.getItem("orders");

    if(data) {
        orders = JSON.parse(data);
    }
}