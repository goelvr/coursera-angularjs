(function() {
'use strict';
angular.module("ShoppingListCheckOff",[])
.controller("ToBuyController",ToBuyController)
.controller("AlreadyBoughtController",AlreadyBoughtController)
.service("ShoppingListCheckOffService",ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyItem = this;

  buyItem.items = ShoppingListCheckOffService.getBuyItems();

  buyItem.buy = function(idx) {
    ShoppingListCheckOffService.buyItem(idx);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtItem = this;

  boughtItem.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  var buyItems = [
    {name: 'Milk', quantity: 2},
    {name: 'Bread', quantity: 1},
    {name: 'Eggs', quantity: 12},
    {name: 'Flour', quantity: 1},
    {name: 'Bananas', quantity: 6}
  ];

  var boughtItems = [];

  service.getBuyItems = function() {
    return buyItems;
  }

  service.getBoughtItems = function() {
    return boughtItems;
  }

  service.buyItem = function(idx) {
    var name = buyItems[idx].name;
    var quantity = buyItems[idx].quantity;
    // first, remove the item from the 'Buy' list
    buyItems.splice(idx, 1);
    // then, add the item to the 'Bought' List
    boughtItems.push({name: name, quantity: quantity});
  }

}
})();
