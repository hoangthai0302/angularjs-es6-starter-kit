import angular from 'angular';
import ApiService from './api.service';
import UserService from './user/user.service';

import DialogService from './dialog.service';

const ServicesModule = angular
  .module('services', [

  ])
  .service('ApiService', ApiService)
  .service('UserService', UserService)
  .service('DialogService', DialogService)
  .name;

export default ServicesModule;