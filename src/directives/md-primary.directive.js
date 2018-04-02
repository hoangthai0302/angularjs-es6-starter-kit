
import './md-button.scss'

export default () => {
    return {
    
        link: function (scope, element, attrs) {
            $(element).addClass('md-primary')
           

        }
    }
}