<script setup lang="ts">
import {
	DialogRoot,
	type DialogRootEmits,
	type DialogRootProps,
	useForwardPropsEmits,
	VisuallyHidden,
} from 'radix-vue'
import { useModal } from '~/store/useModal'

const props = defineProps<DialogRootProps>()
const emits = defineEmits<DialogRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
const modal = useModal()
</script>

<template>
	<DialogRoot
		v-bind="forwarded"
		@update:open="(open) => (modal.open = open)"
		:open="modal.open"
	>
		<DialogContent>
			<visually-hidden><DialogTitle></DialogTitle> </visually-hidden>
			<visually-hidden>
				<DialogDescription></DialogDescription>
			</visually-hidden>
			<slot />
		</DialogContent>
	</DialogRoot>
</template>
