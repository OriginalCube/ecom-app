export const useModal = defineStore('modal', {
	state: () => ({
		open: false,
		type: 'Display',
		data: null as any,
	}),
	actions: {
		openModal(type: string, data: any) {
			this.type = type
			this.data = data
			this.open = true
		},
		closeModal() {
			this.open = false
		},
	},
})
