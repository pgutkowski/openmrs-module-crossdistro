import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mainComponent from './main.component.js';
import Home from '../home/home';

var distroModuleName;

//'angular.module(...)' throws exception if specified module cannot be found
try{
    distroModuleName = angular.module('distro').name
} catch(err) {
    distroModuleName = "fallback";
}

let crossdistroModule = angular.module('crossdistro', [ uiRouter, Home.name, distroModuleName, 'openmrs-contrib-uicommons'
    ])
    .component('main', mainComponent);

export default crossdistroModule;
