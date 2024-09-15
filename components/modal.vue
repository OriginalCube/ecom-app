<template>
	<component :is="component" v-bind="{ ...$attrs, open: open }">
		<component :is="modal" />
	</component>
</template>

<script lang="ts" setup>
import { useModal } from '~/store/useModal'

const { isMobile } = useDevice()
const { open, type } = useModal()

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

const modal = computed(() =>
	defineAsyncComponent(() => import(`~/components/modal/Display.vue`)),
)
</script>
