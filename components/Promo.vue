<template>
	<div
		class="h-40 w-full rounded-md bg-accent text-accent-foreground mt-4 flex py-4 px-6 border border-primary items-center justify-evenly gap-4"
	>
		<article class="flex flex-col gap-2 w-3/5">
			<p class="font-bold text-2xl">
				{{ month }}.{{ day }} <span class="text-xl">Flash Sales</span>
			</p>
			<p>Cashback 100%</p>
			<Button
				class="mt-2 hover:bg-primary hover:text-primary-foreground hover:opacity-80"
				variant="default"
				>Sale Promo
			</Button>
		</article>
		<div class="h-auto w-2/5">
			<NuxtImg :src="data?.image ?? ''" class="rounded-md" />
		</div>
	</div>
</template>

<script lang="ts" setup>
const month = new Date().getMonth()
const day = new Date().getDate()

const { data } = useApi(`/categories/${Math.trunc(Math.random() * 2 + 1)}`)
</script>
