import angular from 'angular';
import distroMessageComponent from './fallback.component.js';

let distroModule = angular.module('fallback', []).component('fallback', distroMessageComponent);

export default distroModule;
