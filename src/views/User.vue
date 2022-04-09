<template>
  <div class="about">
		<b-breadcrumb>
			<b-breadcrumb-item to="/users">
				<b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
				Home
			</b-breadcrumb-item>
			<b-breadcrumb-item active>User {{idRoute}}</b-breadcrumb-item>
		</b-breadcrumb>
		<template v-if="user">
			<b-card :title="user.fullName" :sub-title="user.email">
				<b-avatar variant="info" :src="user.avatar" class="mr-3"></b-avatar>
				<b-card-text>{{user.first_name}}
				<br />{{user.last_name}}</b-card-text>

				<b-button v-b-modal.modal-1 @click="setModalData">Edit</b-button>
				<b-button type="button" variant="danger" class="m-2" @click="showConfirmDel">Delete</b-button>
			</b-card>
			<b-modal
				id="modal-1"
				title="BootstrapVue"
				ok-title="Save"
				@ok="save"
				@hidden="hide"
			>
				<b-form v-if="user">
					<b-form-group
						id="input-group-email"
						label="Email address:"
						label-for="input-email"
					>
						<b-form-input
							id="input-email"
							v-model="editUser.email"
							type="email"
							placeholder="Email"
							required
							class="my-1"
						></b-form-input>
					</b-form-group>
					<b-form-group
						id="input-group-first_name"
						label="Email address:"
						label-for="input-first_name"
					>
						<b-form-input
							id="input-first_name"
							v-model="editUser.first_name"
							type="text"
							placeholder="First name"
							required
							class="my-1"
						></b-form-input>
					</b-form-group>
					<b-form-group
						id="input-group-first_name"
						label="Email address:"
						label-for="input-first_name"
					>
						<b-form-input
							v-model="editUser.last_name"
							type="text"
							placeholder="Last name"
							required
							class="my-1"
						></b-form-input>
					</b-form-group>
				</b-form>
			</b-modal>
		</template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	data() {
		return {
			editUser: {}
		}
	},

	methods: {
		hide() {
			this.editUser = {}
		},
		async save(e) {
			await this.$store.dispatch("user/update", this.editUser)
		},
		del() {
			confirm(`Are you realy want to delete user ${this.idRoute}?`)
		},
		setModalData() {
			this.editUser = JSON.parse(JSON.stringify(this.user))
		},
		showConfirmDel() {
			this.$bvModal.msgBoxConfirm('Are you sure?')
				.then(async () => {
					await this.$store.dispatch("user/delete", this.idRoute)
				})
				.catch((err) => {
					console.error(err)
				})
		},
	},


	computed: {
		...mapGetters({
			user: "user/getUser"
		}),

		idRoute() {
			return this.$route.params.id
		}
	},

	async mounted() {
		await this.$store.dispatch("user/get", this.idRoute)
	}
}
</script>
