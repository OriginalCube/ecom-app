import { useAuthStore } from '~/store/useAuthStore'
import { toast } from '~/components/ui/toast'
import { useCartStore } from '~/store/useCartStore'

export const useCart = () => {
	const addCart = (product: any) => {
		if (!useAuthStore().user.id) {
			toast({
				description: 'Please login first',
				title: 'Error',
				variant: 'destructive',
			})
			return
		}

		useCartStore().addToCart({
			...product,
		})

		toast({ title: 'Success', description: 'Product Added to Cart' })
	}

	return {
		addCart,
	}
}
