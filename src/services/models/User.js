class User {
	constructor(data) {
		this.id = data.id
		this.email = data.email
		this.first_name = data.first_name
		this.last_name = data.last_name
		this.fullName = `${data.first_name} ${data.last_name}`
		this.avatar = data.avatar
	}
}

export default User
