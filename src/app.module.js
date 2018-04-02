
import angular from 'angular';

//import ngMaterial from 'angular-material';
//import 'angular-animate';
//import 'angular-material-icons';
import '@uirouter/angularjs';

// global style
import styles from './styles/styles.scss';


//all components
import Components from './components';

import Directives from './directives'

//all services
import ServicesModule from './services';

import AppConfig from './app.config';
import AppStartUp from './app.startup'

import moment from "moment";
window.moment = moment;

/* @ngInject */
const appModule = angular
	.module('app', [
		'ui.router',
        Components,
        Directives,
		ServicesModule
	])
	.config(AppConfig)
	.run(AppStartUp);

export default appModule;
