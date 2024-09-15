<template>
	<div class="w-full p-4">
		<!--Categories-->
		<Label class="text-lg font-bold text-primary">Categories</Label>
		<div class="mt-4 h-20 w-full overflow-x-auto">
			<div
				class="flex w-full items-center justify-center gap-2 md:justify-around"
			>
				<CategoryItem
					v-for="item in categories"
					:key="item.id"
					:item="item"
					@click="useRouter().push(`/category/${item.id}`)"
				/>
			</div>
		</div>

		<div class="flex gap-2">
			<Promo v-for="item in isMobile ? 1 : 2" :key="item" />
		</div>

		<!--Products-->
		<main class="mb-24 mt-4 h-auto w-full">
			<div class="flex items-center justify-between">
				<Button
					variant="ghost"
					class="cursor-pointer text-lg font-bold text-primary"
					@click="useRouter().push('/products')"
				>
					Products <span class="ml-2 text-sm">(See All)</span>
				</Button>
				<div class="flex items-center gap-4 pr-4">
					<Icon
						name="tabler:arrow-left"
						size="32"
						class="cursor-pointer bg-primary hover:opacity-80"
						@click="() => updateOffset(-limit)"
					/>
					<Icon
						name="tabler:arrow-right"
						size="32"
						class="cursor-pointer bg-primary hover:opacity-80"
						@click="() => updateOffset(limit)"
					/>
				</div>
			</div>

			<!--Loaded Products-->
			<div class="mt-4 flex w-full items-center justify-evenly gap-4">
				<ProductItem
					v-for="item in products"
					:key="item.id"
					:item="item"
					class="h-64 w-40"
					@click="
						() => {
							modal.open = true
							modal.data = item
						}
					"
				/>
			</div>
		</main>
	</div>
</template>

<script lang="ts" setup>
import { useModal } from '~/store/useModal'

const { isMobile } = useDevice()
const limit = isMobile ? 2 : 5
const max = ref(false)
const modal = useModal()
const offset = ref(limit)
const { data: categories } = await useFetch(`${useAPI()}/categories`)
const { data: products, refresh } = await useFetch(
	() => `${useAPI()}/products?offset=${offset.value}&limit=${limit}`,
)

watch(products, () => {
	if (products.value.length < limit) max.value = true
})

const updateOffset = (value: number) => {
	const check = offset.value + value
	if (check < 0) return
	offset.value = check

	if (max.value) {
		offset.value = 0
		max.value = false
	}
	refresh()
}
</script>
