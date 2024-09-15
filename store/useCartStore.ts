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
			this.cart = []
		},
	},
})
