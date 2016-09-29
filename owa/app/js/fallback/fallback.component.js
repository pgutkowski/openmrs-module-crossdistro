import template from './fallback.html';
import controller from './fallback.controller.js';

let homeComponent = {
    restrict: 'E',
    bindings: {},
    template: template,
    controller: controller,
    controllerAs: 'vm'
};

export default homeComponent;
