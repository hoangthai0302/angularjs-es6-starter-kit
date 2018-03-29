

class DialogService {
    /* @ngInject */ 
    constructor($mdDialog, $rootScope) {
        this.$rootScope = $rootScope;
        this.$mdDialog = $mdDialog;
    }


    showLoading(parent) {
        let backdrop = document.getElementById('backdrop');
        if (!backdrop) {
            backdrop = $(`
                <div id="backdrop">
                    <div class="loading-spinner">
                        <div class="bounce1"></div>
                        <div class="bounce2"></div>
                        <div class="bounce3"></div>
                    </div>
                </div>
            `)

            let position = 'fixed';
            let background = 'black';
            if(parent){
                position = 'absolute';
                background = 'gray';
            }
            $(backdrop).css({
                position,
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 999999,
                background,
                opacity:.25
            })

            if(parent){
                $(parent).css({position:'relative'});
                $(parent).prepend(backdrop);
            }else{
                $('body').prepend(backdrop);
            }

        }


        $(backdrop).show();
    }

    hideLoading() {
        $('#backdrop').hide();
    }



    showComponent(componentTemplate, data, options) {
        var componentTemplate = componentTemplate.startsWith('<') ? componentTemplate : '<{0} cmp-data="itemData" />'.format([componentTemplate]);

        var size = options.size ? options.size : 'large';
        var dialogTitle = options.title;

        var width = options.width;
        var height = options.height;

        let style = "";
        if(width && height){
            style= `width:${width}; height:${height};`
        } 

        var count = document.getElementsByTagName('md-dialog').length;

        var template = options.customHeader ? componentTemplate : `
                <md-dialog layout="column" class="md-${size} md-count-${count}" style="${style}">
                    <md-toolbar >
                        <div class="md-toolbar-tools" >
                            <h3 ng-if="dialogTitle" >{{dialogTitle}}</h3>
                            <span flex></span>
                            <md-button ng-if="!hideClose" title="close" class="md-icon-button" ng-click="closeDialog()">
                                <ng-md-icon icon="close"></ng-md-icon>
                            </md-button>
                        </div>
                    </md-toolbar>
                    ${componentTemplate}
                </md-dialog>
            `;

        let dialogOption = {
            template,
            parent: angular.element(document.body),
            clickOutsideToClose: false,
            multiple: true,
            fullscreen: false // Only for -xs, -sm breakpoints.
        };

        Object.assign(dialogOption, options);

        data = data || {};

        var self = this;
        data.closeDialog = data.closeDialog || function () {
            self.$mdDialog.hide();
        }


        Object.assign(data, {
            dialogTitle
        });

        let scope = this.$rootScope.$new();
        Object.assign(scope, data);
        dialogOption.scope = scope;

        return this.$mdDialog.show(dialogOption);
    }

    alert() {
        return this.$mdDialog.alert.call(arguments);
    }

    prompt() {
        return this.$mdDialog.prompt.call(arguments);
    }

    confirm() {
        return this.$mdDialog.confirm.call(arguments);
    }

    show() {
        return this.$mdDialog.show.call(arguments);
    }

    hide() {
        return this.$mdDialog.hide.call(arguments);
    }
}

export default DialogService;