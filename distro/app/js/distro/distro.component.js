import template from './distro.html';
import controller from './distro.controller.js';

let distroMessageComponent = {
    restrict: 'E',
    bindings: {},
    template: template,
    controller: controller,
    controllerAs: 'vm'
};

export default distroMessageComponent;
