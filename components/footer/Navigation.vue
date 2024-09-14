<template>
	<div
		class="h-14 w-16 flex flex-col gap-1 items-center justify-center text-primary border-t-2 pt-2"
	>
		<Icon :name="`${icon}`" class="size-12" />
		<p class="text-sm font-bold">{{ label }}</p>
	</div>
</template>

<script lang="ts" setup>
defineProps<{
	icon: string
	label: string
}>()
</script>
