<template>
	<div
		class="m-auto mt-4 flex h-40 w-full items-center justify-evenly gap-4 rounded-md border border-primary bg-accent px-6 py-4 text-accent-foreground md:w-1/2"
	>
		<article class="flex w-3/5 flex-col gap-2">
			<p class="text-2xl font-bold">
				{{ month }}.{{ day }} <span class="text-xl">Flash Sales</span>
			</p>
			<p>Cashback 100%</p>
			<Button
				class="mt-2 hover:bg-primary hover:text-primary-foreground hover:opacity-80"
				variant="default"
				>Sale Promo
			</Button>
		</article>
		<div class="h-auto w-2/5 overflow-hidden rounded-md md:size-32">
			<ClientOnly>
				<NuxtImg :src="data?.image ?? ''" class="size-full" />
			</ClientOnly>
		</div>
	</div>
</template>

<script lang="ts" setup>
const month = new Date().getMonth()
const day = new Date().getDate()
const { data } = await useFetch(`${useAPI()}/categories/2`)
</script>
