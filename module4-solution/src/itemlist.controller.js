(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('MenuItemListController', MenuItemListController);

  MenuItemListController.$inject = ['MenuDataService','items', '$stateParams'];
  function MenuItemListController(MenuDataService, items, $stateParams) {
    var itemList = this;
    itemList.items = items;
    itemList.category = $stateParams.categoryShortName;
  }
})();
