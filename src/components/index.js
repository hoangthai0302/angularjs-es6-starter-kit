import angular from 'angular';
import CommonComponents from './common'

import HeaderModule from './header';
import Home from './home';
import User from './user';

export default angular.module('components', [
    HeaderModule, Home, User, CommonComponents
])

.name;