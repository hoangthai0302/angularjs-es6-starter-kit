
import './dialog.scss'

class DialogService {
    /* @ngInject */ 
    constructor($rootScope, $compile, $q) {
        Object.assign(this, {
            $rootScope,
            $compile,
            $q
        })

        this.resolve = null;
        this.backdrops = [];
        this.resolves = [];
        this.dialogContainers = [];
        this.count = 0;
        
     
    }
    
    close(data){
        let backdrop = this.backdrops.pop();
        let dialogContainer = this.dialogContainers.pop();
        $(backdrop).removeClass('active');
        $('.dialog', dialogContainer).addClass('removing');
        $('.dialog', dialogContainer).removeClass('ready');
        setTimeout(()=>{
            $(backdrop).remove();
            $(dialogContainer).remove();
        },500)

        let resolve = this.resolves.pop();
        resolve(data);
    }

    getData(){
        return this.data;
    }

    show(template){
        this.showComponent(template, null);
    }

    showComponent(componentTemplate, data) {
        this.count++;
        let dialogzIndex = 80 + this.count*2;
        let backdropZIndex = dialogzIndex - 1;
        let dialogStyle = `style="z-index:${dialogzIndex}"`;
        let bacdropStyle = `style="z-index:${backdropZIndex}"`;

        let backdrop = $(`<div class='backdrop' ${bacdropStyle}></div>`);
        $('body').prepend(backdrop);
        this.backdrops.push(backdrop);
        setTimeout(()=>{
            $(backdrop).addClass('active')
        })

        let dialogContainer = $(`
                <div class="dialog-container" ${dialogStyle}>
                    <div class="dialog zoom-animate">
                        <div class="dialog-header">Title
                            <a href='javascript:void(0)' ng-click='close()' class='close'></a>
                        </div>
                        <div class="dialog-body">
                            ${componentTemplate}
                        </div>
                    </div>
                </div>
            `)

            let scope = this.$rootScope.$new();

            if(data && typeof data === 'object' && !data.length){

                for(let prop in data){
                    scope[prop] = data[prop];
                }
            }

            scope.close = ()=>{
                this.close();
            }
            let dialog = this.$compile(dialogContainer)(scope);
            this.dialogContainers.push(dialogContainer);
            $('body').prepend(dialog);
            setTimeout(()=>{
                $('.dialog').addClass('ready');
            })
          
            let deferred = this.$q.defer();
            
            this.resolves.push(deferred.resolve);

            return deferred.promise;

    }

}

export default DialogService;