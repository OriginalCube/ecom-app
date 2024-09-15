import { useAuthStore } from '~/store/useAuthStore'

export default defineNuxtRouteMiddleware((to, from) => {
	const access_token = useCookie('access_token')
	const refresh_token = useCookie('refresh_token')
	const authLinks = ['/profile']
	if (access_token.value && refresh_token.value) {
		useAuthStore().setToken(access_token.value, refresh_token.value)
		useFetch(`${useAPI()}/auth/profile`, {
			headers: {
				Authorization: `Bearer ${access_token.value}`,
			},
		}).then(({ data: UserInfo }) => {
			useAuthStore().setUser(UserInfo.value)
		})
	}
	if (to.path === '/login' && useAuthStore().isLogin) useRouter().push('/')
	if (authLinks.includes(to.path)) {
		if (!useAuthStore().isLogin) {
			useRouter().push('/login')
		}
	}
})
