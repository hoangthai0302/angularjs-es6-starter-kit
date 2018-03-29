import template from './home.html';


export default {
	template,
	controller: class HomeController {
		/* @ngInject */
		constructor($log, DialogService) {
			Object.assign(this,{
				$log, 
				DialogService
			})

		}
	
		$onInit = () => {
			this.heading = 'Welcome to AngularJS ES6 Starter-Kit';
			this.$log.info('Activated Home View.');
			$('#collapseOne').css({backgroundColor:'green'});
		};

		testDialog(){
			let header = "Test header";
			let number = 125;
			this.DialogService.showComponent(`<card-item header="header" number = "number"></card-item>`,
									{
										header,
										number
									},{
										title:"Test Title"
									})
		}
	}
	
};
