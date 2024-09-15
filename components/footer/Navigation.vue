<template>
	<div
		class="flex h-14 w-16 flex-col items-center justify-center gap-1 border-t-2 pt-2 text-primary"
		@click="action"
	>
		<Icon :name="`${icon}`" class="size-12" />
		<p class="text-sm font-bold">{{ label }}</p>
	</div>
</template>

<script lang="ts" setup>
defineProps<{
	action: () => void
	icon: string
	label: string
}>()
</script>
