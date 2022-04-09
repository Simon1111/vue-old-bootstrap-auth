<template>
	<div v-if="users.data">
		<b-table :fields="fields" :items="users.data">
			<template #cell(index)="data">
				{{ data.index + 1 }}
			</template>
			<template #cell(name)="data">
				<b-link :to="`/user/${data.item.id}`" class="d-flex align-items-center">
					<b-avatar variant="info" :src="data.item.avatar" class="mr-3"></b-avatar>
					<span class="m-2 mr-auto">{{data.item.fullName}}</span>
				</b-link>
			</template>
		</b-table>

		<b-pagination
      v-model="currentPage"
      :total-rows="users.total"
      :per-page="users.per_page"
      aria-controls="my-table"
    ></b-pagination>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { DEF_PAGE } from "../constants"

export default {
	data() {
		return {
			currentPage: DEF_PAGE,
			fields: [
				'index',
				{
					key: 'name',
					label: 'Full Name',
					formatter: 'fullName'
				},
				'email'
			]
		}
	},

	computed: {
		...mapGetters({
			users: "user/getUsers"
		})
	},

	watch: {
		async currentPage(val) {
			this.$router.push({ query: { page: val } })
			await this.getAllUsers(val)
		}
	},

	methods: {
		async getAllUsers(page) {
			console.log(page)
			await this.$store.dispatch("user/all", page)
		}
	},

	async mounted() {
		const { query } = this.$router
		if (query?.page) {
			this.currentPage = query?.page
		}
		await this.getAllUsers(this.currentPage)
	}
}
</script>
