<template>
	<div
		class="h-12 w-16 flex flex-col gap-1 items-center justify-center text-primary"
	>
		<Icon :name="icon" class="size-12" />
		<p class="text-sm">{{ label }}</p>
	</div>
</template>

<script lang="ts" setup>
defineProps<{
	icon: string
	label: string
}>()
</script>
