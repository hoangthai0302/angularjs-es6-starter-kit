import template from './datepicker.html';
import './datepicker.scss';

export default {
    bindings: {
        date: '=',
        maxDate:'=?',
        minDate:'=?',
        format:'@',
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
            let format = this.format || 'll';
                
                this.$timeout(()=>{
                    this.el = document.getElementById(this.id);
                    let el = this.el;
                    $(el).bootstrapMaterialDatePicker({
                        format,
                        nowButton:true,
                        nowText:'Today',
                        currentDate:this.getDateFormat(),
                        time: false
                    }).on('change', (e, date)=>{
                        this.date = moment(el.value);
                        this.$scope.$apply();
                        
                    });
                    if(this.maxDate){
                        $(el).bootstrapMaterialDatePicker('setMaxDate', this.maxDate);
                    }
                    if(this.minDate){
                        $(el).bootstrapMaterialDatePicker('setMinDate', this.minDate);
                    }

                })
            
                this.$scope.$watch(() => this.date,
                    (newValue, oldValue) => {
                        let el = document.getElementById(this.id);
                        if(el){
                            el.value = this.getDateFormat();
                            el.classList.add('has-focus');
                        }
                });
                this.$scope.$watch(()=> this.maxDate,
                    (newValue, oldValue) =>{
                        let el = document.getElementById(this.id);
                        if(el){
                            $(el).bootstrapMaterialDatePicker('setMaxDate', this.maxDate);
                        }
                    });
                this.$scope.$watch(()=> this.minDate,
                    (newValue, oldValue) =>{
                        let el = document.getElementById(this.id);
                        if(el){
                            $(el).bootstrapMaterialDatePicker('setMinDate', this.minDate);
                        }
                    });
        }

        getDateFormat(){
            let date = this.date || moment.now();
            let format = this.format || 'll';
            return moment(date).format(format);
        }

        handleBlur(){
            this.el.classList.remove('has-focus')
        }


    },
    restrict: 'E'
};


