import CardItem from './card-item/card-item';
import DatePicker from './datepicker'
export default angular.module('common', [
    DatePicker
])
.component('cardItem', CardItem)
.name;

