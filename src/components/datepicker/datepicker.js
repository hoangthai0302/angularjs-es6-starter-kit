import template from './datepicker.html';
import './datepicker.scss';
import Pikaday from  'pikaday/pikaday.js'

export default {
    bindings: {
        date: '='
    },
    template,
    controller: class Controller{
          /* @ngInject */ 
        constructor($element, $scope, $timeout){
            Object.assign(this,{
                $element,
                $scope,
                $timeout
            })
            this.id = Math.random().toString(36).substr(2, 16);
        }
        $onInit(){
            let el;
                let date = this.date || moment.now();
                let format = this.format || 'DD/MM/YYYY';
                this.dateFormat = moment(date).format(format);
                this.$timeout(()=>{
                    el = document.getElementById(this.id);
                    $(el).bootstrapMaterialDatePicker({
                        format,
                        currentDate:this.dateFormat,
                        time: false,
                        clearButton: true
                    }).on('change', (e, date)=>{
                        this.date = moment(el.value);
                        this.$scope.$apply()
                    });
                })
            

        }
        $onChanges(changes){
            console.log(changes)
        }


    },
    restrict: 'E'
};


