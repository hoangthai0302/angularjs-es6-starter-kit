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
			this.heading = 'Components showcase:';
			this.$log.info('Activated Home View.');
            this.date = moment.now();
            this.tomorrow = moment().add(7,'days');
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
            this.startDate = moment()
            this.tomorrow = moment().add(1,'days');
		}
	}
	
};
