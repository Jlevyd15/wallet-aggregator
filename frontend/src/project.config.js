import Login from './pages/LoginPage'
import Users from './pages/UsersPage'
import Landing from './pages/LandingPage'
import Register from './pages/RegisterPage'

export const config = {
	routes: {
		home: { route: '/', name: 'Home', component: Landing, secure: false },
		login: { route: '/login', name: 'Login', component: Login, secure: false },
		register: { route: '/register', name: 'Register', component: Register, secure: false },
		dashboard: { route: '/dashboard', name: 'Dashboard', component: Landing, secure: true },
		users: { route: '/getUsers', name: 'Register', component: Users, secure: true },
	},
	forms: {

	},
	fields: {

	},
	modals: {

	}
}