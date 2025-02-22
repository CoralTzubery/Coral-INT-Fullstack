"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderOrders = renderOrders;

function renderOrders(orders) {
  var orderList = document.querySelector(".order-list");
  if (!orderList) return;

  while (orderList.firstChild) {
    orderList.removeChild(orderList.firstChild);
  }

  var header = document.createElement("li");
  header.className = "order-header";
  ["#", "Cutomer", "Items", "Status", "Actions"].forEach(function (text) {
    var p = document.createElement("p");
    p.textContent = text;
    header.appendChild(p);
  });
  orders.forEach(function (order) {
    var orderItem = document.createElement("li");
    orderItem.className = "order-item";
    var id = document.createElement("p");
    id.textContent = String(order.id);
    var customer = document.createElement("p");
    customer.textContent = order.customerName;
    var items = document.createElement("p");
    items.textContent = order.items.join(", ");
    var status = document.createElement("p");
    status.textContent = order.status;
    var editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit";
    editBtn.dataset.id = String(order.id);
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.className = "delete";
    deleteBtn.dataset.id = String(order.id);
    orderItem.append(id, customer, items, status, editBtn, deleteBtn);
    orderList.appendChild(orderItem);
  });
}