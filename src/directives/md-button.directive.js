
import './md-button.scss'

export default () => {
    return {
    
        link: function (scope, element, attrs) {
            $(element).addClass('md-button');
            $(element).mousedown(handleEvent);

            function handleEvent(e){
                // Remove any old one
                $(".ripple", this).remove();
                // Setup
                var posX = $(this).offset().left,
                posY = $(this).offset().top,
                buttonWidth = $(this).width(),
                buttonHeight =  $(this).height();

                // Add the element
                $(this).prepend("<span class='ripple'></span>");


                // Make it round!
                if(buttonWidth >= buttonHeight) {
                buttonHeight = buttonWidth;
                } else {
                buttonWidth = buttonHeight; 
                }

                // Get the center of the element
                var x = e.pageX - posX - buttonWidth / 2;
                var y = e.pageY - posY - buttonHeight / 2;


                // Add the ripples CSS and start the animation
                $(".ripple").css({
                width: buttonWidth,
                height: buttonHeight,
                top: y + 'px',
                left: x + 'px'
                }).addClass("rippleEffect");
            }
           

        }
    }
}