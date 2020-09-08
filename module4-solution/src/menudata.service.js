(function () {
  'use strict';

  angular.module('data')
    .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
      var service = this;

      // Get all the Menu categories
      service.getAllCategories = function() {
        var categories = [];
        return $http(
          {
            url: 'https://davids-restaurant.herokuapp.com/categories.json'
          }
        ).then(function(response) {
          var categories = response.data;
          return categories;
        }).catch(function(error) {
            console.log("Error while getting menu categories: " + error);
            return [];
        });
      };

      // Get all the items for the selected menu category
      service.getItemsForCategory = function(categoryShortName) {
        var items = [];
        return $http(
          {
            url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName
          }
        ).then(function(response) {
          var items = response.data.menu_items;
          return items;
        }).catch(function(error) {
            console.log("Error while getting menu items for category ' + categoryShortName + ': " + error);
            return [];
        });
      };
    }
})();
