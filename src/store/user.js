import UserService from "../services/UserService"

export default {
  namespaced: true,
	state: {
		users: [],
		user: null
	},
	mutations: {
		setUsers(state, users) {
			state.users = users
		},
		setUser(state, user) {
			state.user = user
		}
	},
	actions: {
		async all({ commit }, page) {
			const users = await UserService.all(page)
			console.log(users)
			commit("setUsers", users)
		},
		async get({ commit }, id) {
			const user = await UserService.get(id)
			commit("setUser", user)
		},
		async create({ commit }, data) {
			const users = await UserService.create(data)
			commit("setUser", users)
		},
		async update({ commit }, data) {
			const user = await UserService.update(data)
			commit("setUser", user)
		},
		async delete({ commit }, id) {
			await UserService.delete(id)
			commit("setUser", null)
		}
	},
	getters: {
		getUsers: state => state.users,
		getUser: state => state.user
	}
}
