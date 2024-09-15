<script lang="ts" setup>
import type { DrawerRootEmits, DrawerRootProps } from 'vaul-vue'
import { DrawerRoot } from 'vaul-vue'
import { useForwardPropsEmits, VisuallyHidden } from 'radix-vue'
import { useModal } from '~/store/useModal'

const props = withDefaults(defineProps<DrawerRootProps>(), {
	shouldScaleBackground: true,
})

const emits = defineEmits<DrawerRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
const modal = useModal()
</script>

<template>
	<DrawerRoot
		v-bind="forwarded"
		:open="modal.open"
		@update:open="(open) => (modal.open = open)"
	>
		<DrawerContent>
			<VisuallyHidden><DialogTitle></DialogTitle> </VisuallyHidden>
			<VisuallyHidden><DialogDescription></DialogDescription> </VisuallyHidden>
			<slot />
		</DrawerContent>
	</DrawerRoot>
</template>
