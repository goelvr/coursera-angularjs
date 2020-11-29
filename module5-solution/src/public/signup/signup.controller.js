(function() {
  'use strict';

  angular.module('public')
  .controller('SignupController', SignupController);

  SignupController.$inject = ['SignupService','MenuService'];
  function SignupController(SignupService, MenuService) {
    var signupCtrl = this;

    signupCtrl.submit = function(signupForm) {
      signupCtrl.submitted = true;
      if (signupForm.$valid) {
        // now check if the menu item is a valid menu
        var favoriteMenuItem = signupCtrl.user.favoriteMenuNumber.toUpperCase();
        return MenuService.getMenuItem(favoriteMenuItem).then(function(response) {
          if (response) {
            console.log("Menu Item: " + response.short_name + " - " + response.name);
            signupCtrl.menuItemInvalid = false;
            signupCtrl.completed = true;
            signupCtrl.user.favoriteMenuName = response.name;
            signupCtrl.user.favoriteMenuDesc = response.description;
            SignupService.addUser(signupCtrl.user);
          } else {
            signupCtrl.menuItemInvalid = true;
            console.log("Menu Item '" + favoriteMenuItem + "' does not exist");
          }
        })
      }
    }
  }
})()
