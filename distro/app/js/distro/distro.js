import angular from 'angular';
import distroMessageComponent from './distro.component.js';

let distroModule = angular.module('distroSubModule', []).component('distroMessage', distroMessageComponent);

export default distroModule;
