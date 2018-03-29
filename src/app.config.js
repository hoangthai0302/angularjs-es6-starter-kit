	/* @ngInject */
export default function appConfig(
    $stateProvider,
    $locationProvider,
    $urlRouterProvider,
    $httpProvider,
    $mdAriaProvider,
    $mdThemingProvider,
    $mdDateLocaleProvider
  )  {
    let routes = [
        {
            name: 'home',
            url: '/',
            component: 'home'
        },
        {
            name: 'user',
            url: '/user',
            component: 'user'
        }
    ];

	$locationProvider.html5Mode(true); // setting html5 mode to remove !# from url
    $urlRouterProvider.otherwise('/'); // setting default route
    
      // Globally disables all ARIA warnings.
    $mdAriaProvider.disableWarnings();

    $mdThemingProvider.theme('default')
    .primaryPalette('blue')


	routes.forEach((route) => {
		$stateProvider.state(route);
	});
  }