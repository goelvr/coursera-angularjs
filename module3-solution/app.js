(function() {
'use strict';
angular.module("NarrowItDownApp",[])
.controller("NarrowItDownController",NarrowItDownController)
.service("MenuSearchService",MenuSearchService)
.directive("foundItems",FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'menuItems.html',
    scope: {
      found: '<',
      onRemove: '&'
    }
  }
  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrowItDown = this;

  narrowItDown.getMenuItems = function() {
    if (narrowItDown.searchString) {
      MenuSearchService.getMatchedMenuItems(narrowItDown.searchString).then(function (response) {
          narrowItDown.found = response;
          //console.log("narrowItDown.found length: " + narrowItDown.found.length);
      });
    } else {
      // no search criteria entered
      narrowItDown.found = [];
    }
  }

  narrowItDown.removeItem = function(itemIndex) {
    narrowItDown.found.splice(itemIndex, 1);
  }

  narrowItDown.hasItems = function() {
    return (narrowItDown.found && (narrowItDown.found.length > 0));
  }
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function(searchString) {
    return $http(
      {
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
      }
    ).then(function(response) {
      var foundItems = [];
      var menuItems = response.data.menu_items;
      if (menuItems) {
        console.log("response: " + menuItems.length);
        for (var m = 0; m < menuItems.length; m++) {
          if (menuItems[m].description.indexOf(searchString) >= 0) {
            foundItems.push(menuItems[m]);
          }
        }
      }
      //console.log("found matching " + searchString + ": " + foundItems.length);
      return foundItems;
    }).catch(function(error) {
      console.log("error:" + error);
      return [];
    });
  }
}

})();
