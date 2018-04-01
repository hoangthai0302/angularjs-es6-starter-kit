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
			this.date = new Date();
		};

		testDialog(){
			let obj = {name:'hoang thai'};
			let header = "Test header";
			let number = 125;
			this.DialogService.showComponent(`<user prop="name"/>`, obj).then((data)=>{
				console.log(data);
			})
			
		}

		setToday(){
			this.date = new Date();
		}
	}
	
};
