import template from './header.html';
import controller from './header.controller.js';

let distroHeaderComponent = {
    restrict: 'E',
    bindings: {},
    template: template,
    controller: controller,
    controllerAs: 'vm'
};

export default distroHeaderComponent;
