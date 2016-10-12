import angular from 'angular';
import distroHeaderComponent from './header.component.js';

let distroModule = angular.module('openmrs-contrib-uicommons.header', []).component('openmrsHeader', distroHeaderComponent);

export default distroModule;
