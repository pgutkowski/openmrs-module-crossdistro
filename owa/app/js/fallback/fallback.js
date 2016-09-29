import angular from 'angular';
import distroMessageComponent from './fallback.component.js';

let distroModule = angular.module('fallback', []).component('distroMessage', distroMessageComponent);

export default distroModule;
