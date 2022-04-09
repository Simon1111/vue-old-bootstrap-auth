import ApiService from "./ApiService"
// import User from "./models/User"

// ogin - /login (post)
// users list - /users (get)
// single user - /users/{id} (get)
// create user - /users (post)
// update user - /users/{id} (put/patch)
// delete user - /users/{id} (delete)

const LoginService = {
	auth: async (user) => {
		try {
			const { data } = await ApiService.post(`/login`, user)
			return data
		} catch (error) {
			console.error(error)
			return { error }
		}
	}
}

export default LoginService
