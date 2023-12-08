class coffeeShop {
  constructor(name, menu) {
    this.name = name;
    this.menu = menu;
    this.orders = [];
  }
  addOrder(order) {
    if (this.menu.find((item) => item.itemName === order)) {
      this.orders.push(order);
    } else {
      return `This item is currently unavailable!`;
    }
  }
  fulfillOrder() {
    if (this.orders.length !== 0) {
      return `The ${this.orders[0]} is ready!`;
    } else {
      return `All orders have been fulfilled!`;
    }
  }
  listOrders() {
    if (this.orders !== 0) {
      return this.orders;
    } else {
      return [];
    }
  }
  dueAmount() {}

  // idk, will delete later
  returnArrayOrders() {
    console.log(this.orders);
  }
}
let arrayItems = [
  {
    itemName: "Fried Chicken",
    type: "Food",
    price: 10.99,
  },
  {
    itemName: "Steak",
    type: "Food",
    price: 5.99,
  },
];
const newCoffeeShop = new coffeeShop("Wendy's", arrayItems);
newCoffeeShop.addOrder("Fried Chicken");
newCoffeeShop.addOrder("Steak");
newCoffeeShop.returnArrayOrders();
console.log(newCoffeeShop.fulfillOrder());
console.log(newCoffeeShop.listOrders());
newCoffeeShop.dueAmount();
