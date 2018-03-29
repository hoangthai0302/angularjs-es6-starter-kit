import template from './user.html';

export default {
	template,
	controller: class UserController {
		/* @ngInject */ 
		constructor(
			$log,
			UserService
		) {
			this.$log = $log;
			this.UserService = UserService;
		}
	
		$onInit = () => {
			this.UserService.get().then((users) => {
				this.users = users;
			});
	
			this.$log.info('Activated User View.');
		};
	}
	
}
