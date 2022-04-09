import LoginService from "../services/LoginService"

const TOKEN_KEY = 'token'

const isValidToken = (token) => {
	// here will be login of token when
	return !!token
}

export default {
  namespaced: true,
	state: {
		isAuth: isValidToken(!!localStorage.getItem(TOKEN_KEY)),
		error: null
	},
	mutations: {
		setAuth(state, status = false) {
			state.isAuth = status
		},
		setError(state, error = {}) {
			state.error = error
		}
	},
	actions: {
		async login({ commit }, form) {
			const data = await LoginService.auth(form)
			if (data?.token) {
				localStorage.setItem(TOKEN_KEY, data.token)
				commit("setAuth", true)
				commit("setError")
			}
			if (data?.error) {
				commit("setAuth")
				commit("setError", data.error)
			}
		},
		checkAuth({ getters }) {
			return getters["auth/isAuth"]
		},
		exit({ commit }) {
			localStorage.removeItem(TOKEN_KEY)
			commit("setAuth")
		}
	},
	getters: {
		isAuth: state => state.isAuth
	}
}
