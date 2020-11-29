(function() {
  'use strict';

  angular.module('common')
  .service('SignupService',SignupService);

  function SignupService() {
    var service = this;
    var user = {};

    service.addUser = function(user) {
      this.user = user;
    }

    service.getUser = function() {
      return this.user;
    }
  }
})()
