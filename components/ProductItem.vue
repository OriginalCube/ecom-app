<template>
	<div
		class="flex max-w-60 cursor-pointer flex-col gap-1 rounded-md border border-background p-2 hover:border-border"
	>
		<ClientOnly>
			<Skeleton
				v-if="item.images[0].includes('[')"
				class="h-48 w-full animate-pulse bg-primary opacity-10"
			/>
			<NuxtImg
				v-else
				:src="Array.isArray(item.images) ? item.images[0] : item.images"
				class="h-48 w-full rounded-md border border-border shadow-xl shadow-accent"
			/>
		</ClientOnly>
		<p
			class="m-auto w-10/12 overflow-hidden text-ellipsis whitespace-nowrap text-center font-semibold text-primary"
		>
			{{ item.title.split(' ').splice(0, 4).join(' ') }}
		</p>
	</div>
</template>

<script lang="ts" setup>
import type { Product } from '~/types/Store'

defineProps<{
	item: Product
}>()
</script>
