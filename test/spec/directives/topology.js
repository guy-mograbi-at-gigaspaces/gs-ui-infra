'use strict';

describe('Directive: topology', function () {

  // load the directive's module
  beforeEach(module('gsUiInfra'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<topology></topology>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the topology directive');
  }));
});
