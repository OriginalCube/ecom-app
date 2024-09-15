import { useAuthStore } from '~/store/useAuthStore'
import { toast } from '~/components/ui/toast'

export const useAuth = () => {
	const loginUser = async ({
		email,
		password,
	}: {
		email: string
		password: string
	}) => {
		const { data } = await useFetch(`${useAPI()}/auth/login`, {
			method: 'POST',
			body: { email, password },
		})
		const access_token = useCookie('access_token')
		const refresh_token = useCookie('refresh_token')
		if (data.value?.refresh_token && data.value?.access_token) {
			useAuthStore().setToken(data.value.access_token, data.value.refresh_token)
			const { data: UserInfo } = await useFetch(`${useAPI()}/auth/profile`, {
				headers: {
					Authorization: `Bearer ${data.value.access_token}`,
				},
			})
			useAuthStore().setUser(UserInfo.value)
			toast({ description: 'Login Successful', title: 'Success' })
			access_token.value = data.value.access_token
			refresh_token.value = data.value.refresh_token
			useRouter().push('/')
		} else {
			toast({
				description: 'Login Failed',
				title: 'Error',
				variant: 'destructive',
			})
		}
	}

	return {
		loginUser,
	}
}
