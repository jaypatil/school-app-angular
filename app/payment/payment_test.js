'use strict';

describe('myApp.payments module', function() {

  beforeEach(module('myApp.payments'));

  describe('payments controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var paymentsCtrl = $controller('paymentsCtrl');
      expect(paymentsCtrl).toBeDefined();
    }));

  });
});