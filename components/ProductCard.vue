<template>
	<Card>
		<VisuallyHidden><CardHeader></CardHeader></VisuallyHidden>
		<CardContent>
			<img :src="image" class="w-full rounded-md" />
			<article>
				<Label>{{ title }}</Label>
				<p>{{ rate }}/10</p>
			</article>
		</CardContent>
	</Card>
</template>

<script lang="ts" setup>
import { VisuallyHidden } from 'radix-vue'

defineProps<{
	id: number
	title: string
	price: number
	description: string
	category: string
	image: string
	ratings: {
		rate: number
		count: number
	}
}>()
</script>
