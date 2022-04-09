import axios from "axios"

const config = {
	baseURL: process.env.VUE_APP_URL_API,
}

console.log(config)

let api = axios.create(config)

const ApiService = {
	get(resource) {
		return api.get(resource)
	},

	post(resource, data) {
		return api.post(resource, data)
	},

	put(resource, data) {
		return api.put(resource, data)
	},

	delete(resource) {
		return api.delete(resource)
	}
}

export default ApiService
