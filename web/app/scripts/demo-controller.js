/**
 * @class DemoController
 * @classdesc
 * @ngInject
 */
function DemoController($log, $state, 
    cfg, TimeService, UserService, PeerService) {

  var ctl = this;

  ctl.now = function() {
    return TimeService.now;
  };

  ctl.tick = function() {
    TimeService.tick();
  };

  ctl.clock = function() {
    TimeService.clock();
  };
  
  ctl.user = UserService.getUser();

  ctl.users = UserService.getUsers();
  
  ctl.setUser = function() {
    UserService.setUser(ctl.user);

    switch(ctl.user.role){
        case 'issuer':
            $state.go('demo.issuerContractList');
            break;
        case 'investor':
            $state.go('demo.investorContractList');
            break;
        case 'bank':
            $state.go('demo.offline');
            break;
    }
  };

}

angular.module('demoController', [])
.controller('DemoController', DemoController);