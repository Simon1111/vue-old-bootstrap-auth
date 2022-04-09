<template>
	<div id="app">
		<b-navbar toggleable="lg" type="dark" variant="primary">
			<b-container fluid="md">
				<b-navbar-brand href="#">NavBar</b-navbar-brand>
				<b-button variant="light" @click="exit">Exit</b-button>
			</b-container>
		</b-navbar>
		<br />
		<b-container fluid="md">
			<router-view/>
		</b-container>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',

	data() {
		return {
			show: false
		}
	},

	methods: {
		exit() {
			this.$store.dispatch("auth/exit")
			this.$router.push('/login')
		}
	}
}
</script>
