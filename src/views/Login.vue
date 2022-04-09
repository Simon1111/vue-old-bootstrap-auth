<template>
	<b-form @submit="onSubmit" style="max-width: 360px">
		<h1>Authorization</h1>
		<b-form-group
			id="input-group-1"
			label="Email address:"
			label-for="input-1"
		>
			<b-form-input
				id="input-1"
				v-model="form.email"
				type="email"
				placeholder="Enter email"
				required
			></b-form-input>
		</b-form-group>

		<b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
			<b-form-input
				v-model="form.password"
				type="password"
				placeholder="Enter password"
				required
			></b-form-input>
		</b-form-group>

		<br />
		<b-button type="submit" variant="primary">Submit</b-button>
	</b-form>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					email: '',
					password: ''
				},
			}
		},

		methods: {
			async onSubmit(event) {
				event.preventDefault()
				try {
					await this.$store.dispatch("auth/login", this.form)
					this.$router.push('/users')
				} catch (err) {
					console.error(err)
				}
			}
		}
	}
</script>
