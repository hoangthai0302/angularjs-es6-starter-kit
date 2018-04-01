import angular from 'angular';
import HeaderModule from './header';
import Home from './home';
import User from './user';
import DatePicker from './datepicker/datepicker'

import CardItem from './card-item/card-item.component';



export default angular.module('components', [
    HeaderModule, Home, User
])
.component('cardItem',CardItem)
.component('datePicker',DatePicker)
.name;