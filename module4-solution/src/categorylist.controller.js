(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('MenuCategoryListController', MenuCategoryListController);

  MenuCategoryListController.$inject = ['MenuDataService','categories'];
  function MenuCategoryListController(MenuDataService, categories) {
    var categoryList = this;
    categoryList.categories = categories;
  }
})();
