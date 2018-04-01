import template from './user.html';

export default {
	template,
	bindings: {
        prop: '<',
    },
	controller: class UserController {
		/* @ngInject */ 
		constructor(
			$log,
			UserService,
			DialogService,
			$scope
		) {
			Object.assign(this, {
				DialogService,
				$log,
				$scope,
				UserService
			})
		}
	
		$onInit = () => {
			this.UserService.get().then((users) => {
				this.users = users;
			});

			console.log(this.$scope)
	
			this.$log.info('Activated User View.');
		};

		test(){
			this.DialogService.close({name:'Danny'});
		}
		showDialog(){
			this.DialogService.show('Hello');
		}
	}
	
}
