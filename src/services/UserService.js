import ApiService from "./ApiService"
import User from "./models/User"
import { DEF_PAGE } from "../constants"

// ogin - /login (post)
// users list - /users (get)
// single user - /users/{id} (get)
// create user - /users (post)
// update user - /users/{id} (put/patch)
// delete user - /users/{id} (delete)

const UserService = {
	all: async (page = DEF_PAGE) => {
		try {
			const { data } = await ApiService.get(`/users?page=${page}`)
			if (data.data) {
				data.data = data.data.map(el => new User(el))
			}
			return data || []
		} catch (err) {
			console.error(err)
		}
	},
	get: async (id) => {
		try {
			const { data } = await ApiService.get(`/users/${id}`)
			console.log(data)
			return new User(data.data)
		} catch (err) {
			console.error(err)
		}
	},
	create: async (user) => {
		try {
			const { data } = await ApiService.post(`/users`, user)
			console.log(data)
			return new User(data.data)
		} catch (err) {
			console.error(err)
		}
	},
	update: async (user) => {
		try {
			const { data } = await ApiService.put(`/users/${user.id}`, user)
			return new User(data)
		} catch (err) {
			console.error(err)
		}
	},
	delete: async (id) => {
		try {
			await ApiService.delete(`/users/${id}`)
		} catch (err) {
			console.error(err)
		}
	}
}

export default UserService
