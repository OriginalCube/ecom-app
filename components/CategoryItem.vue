<template>
	<div
		class="h-16 w-20 flex flex-col items-center justify-around px-2 text-primary"
	>
		<Icon :name="customIcons()" size="24" />
		<Label class="text-xs font-bold">{{ item.name }}</Label>
	</div>
</template>

<script lang="ts" setup>
import type { Category } from '~/types/Store'

const props = defineProps<{
	item: Category
}>()

const customIcons = () => {
	switch (props.item.name) {
		case 'Clothes':
			return 'tabler:shirt'
		case 'Electronics':
			return 'tabler:device-tv'
		case 'Furniture':
			return 'tabler:brand-couchdb'
		case 'Shoes':
			return 'tabler:shoe'
		default:
			return 'tabler:gift'
	}
}
</script>
