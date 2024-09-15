import { toast } from '~/components/ui/toast'

export const useCartStore = defineStore('cart', {
	state: () => ({
		cart: [],
	}),
	actions: {
		addToCart(product: any) {
			this.cart.push(product)
		},
		removeFromCart(product: any) {
			this.cart = this.cart.filter((item) => item.id !== product.id)
		},
		clearCart() {
			toast({ title: 'Success', description: 'Items ordered' })
			this.cart = []
		},
		totalPrice() {
			return this.cart.reduce((acc, item) => acc + item.price, 0)
		},
	},
})
