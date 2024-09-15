<template>
	<component :is="component" v-bind="{ ...$attrs, open: modal.open }">
		<component :is="componentModal" />
	</component>
</template>

<script lang="ts" setup>
import { useModal } from '~/store/useModal'

const { isMobile } = useDevice()
const modal = useModal()

const component = computed(() => {
	if (isMobile)
		return defineAsyncComponent(
			() => import('~/components/ui/drawer/Drawer.vue'),
		)
	else
		return defineAsyncComponent(
			() => import('~/components/ui/dialog/Dialog.vue'),
		)
})

const componentModal = computed(() => {
	if (modal.type === 'Display')
		return defineAsyncComponent(() => import('~/components/modal/Display.vue'))
	else if (modal.type === 'Cart')
		return defineAsyncComponent(() => import('~/components/modal/Cart.vue'))
	else if (modal.type === 'CRUD')
		return defineAsyncComponent(() => import('~/components/modal/CRUD.vue'))
})
</script>
