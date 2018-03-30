export default class UserService {
	/* @ngInject */
	constructor(
		$http
	) {

		this.$http = $http;
	}

	get = () => {
		return this.$http.get('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				return response.data;
			});
	};
}
