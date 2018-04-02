import mdButton from './md-button.directive';
import mdOrange from './md-orange.directive'
import mdPrimary from './md-primary.directive'
export default angular
    .module('common.directives', [])
    .directive('mdButton', mdButton)
    .directive('mdOrange', mdOrange)
    .directive('mdPrimary', mdPrimary)
    .name;