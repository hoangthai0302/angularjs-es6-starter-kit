
import angular from 'angular';
import ngMaterial from 'angular-material';
import 'angular-animate';
import 'angular-material-icons';
import uiRouter from 'angular-ui-router';

// global style
import styles from './styles/styles.scss';


//all components
import Components from './components';

//all services
import ServicesModule from './services';

import AppConfig from './app.config';
import AppStartUp from './app.startup'


/* @ngInject */
const appModule = angular
	.module('app', [
		uiRouter,
		ngMaterial,
		'ngAnimate',
		'ngMdIcons',
		Components,
		ServicesModule
	])
	.config(AppConfig)
	.run(AppStartUp);

export default appModule;
