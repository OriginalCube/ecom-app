import { useAuthStore } from '~/store/useAuthStore'
import { toast } from '~/components/ui/toast'
import { useModal } from '~/store/useModal'

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

	const registerUser = async (user) => {
		const { data } = await useFetch(`${useAPI()}/users`, {
			method: 'POST',
			body: user,
		})

		if (data.value) {
			toast({
				description: 'Register Successful',
				title: 'Success, you can now login',
			})
			useAuthStore().setUser(data.value)
			return true
		}

		return false
	}

	const createProduct = async (product: any) => {
		const { data } = await useFetch(`${useAPI()}/products`, {
			method: 'POST',
			body: { ...product, images: ['https://i.imgur.com/ZANVnHE.jpeg'] },
		})
		if (data.value) {
			toast({
				description: 'Product Created Successfully',
				title: 'Success',
			})
			useModal().closeModal()
		}
	}

	const updateProduct = async (product: any) => {
		const { data } = await useFetch(`${useAPI()}/products/${product.id}`, {
			method: 'PUT',
			body: { ...product, images: ['https://i.imgur.com/ZANVnHE.jpeg'] },
		})

		if (data.value) {
			toast({
				description: 'Product Updated Successfully',
				title: 'Success',
			})
			useModal().closeModal()
		}
	}

	return {
		registerUser,
		loginUser,
		createProduct,
		updateProduct,
	}
}
