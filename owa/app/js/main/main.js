import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mainComponent from './main.component.js';
import Home from '../home/home';
import Fallback from '../fallback/fallback';

let crossdistroModule = angular.module('crossdistro', [ uiRouter, Home.name, Fallback.name, 'openmrs-contrib-uicommons'])
    .component('main', mainComponent);

export default crossdistroModule;
