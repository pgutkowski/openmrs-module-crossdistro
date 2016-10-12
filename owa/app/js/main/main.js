import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mainComponent from './main.component.js';
import Home from '../home/home';
import Fallback from '../fallback/fallback';

var distroModuleName;

//'angular.module(...)' throws exception if specified module cannot be found
var dependencies = [ uiRouter, Home.name, Fallback.name, 'openmrs-contrib-uicommons'];
try {
    distroModuleName = angular.module('distro').name;
    dependencies.push(distroModuleName);
} catch(err) {
    console.log('No distro module');
}

let crossdistroModule = angular.module('crossdistro', dependencies)
    .component('main', mainComponent);

export default crossdistroModule;
