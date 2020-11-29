(function() {
  'use strict';

  angular.module('public')
  .controller('InfoController', InfoController);

  InfoController.$inject = ['user','ApiPath'];
  function InfoController(user, ApiPath) {
    var infoCtrl = this;
    infoCtrl.user = user;
    infoCtrl.basePath = ApiPath;
  }
})()
