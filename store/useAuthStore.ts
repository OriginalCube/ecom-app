export const useAuthStore = defineStore('auth', {
	state: () => ({
		user: {
			id: null as number,
			email: null as string,
			name: null as string,
			avatar: null as string,
		},
		access_token: null as string,
		refresh_token: null as string,
		isLogin: false,
	}),
	actions: {
		setUser(user: any) {
			this.user = user
			this.isLogin = true
		},
		setToken(access_token: string, refresh_token: string) {
			this.refresh_token = refresh_token
			this.access_token = access_token
		},
		clearUser() {
			this.user = null
			this.isLogin = false
		},
	},
})
