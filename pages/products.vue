<template>
	<div class="w-full p-4">
		<Label class="text-lg font-bold text-primary">Products</Label>
		<Input v-model="search" class="my-2" placeholder="Find Product" />
		<div
			v-if="filteredProducts.length"
			class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-5"
		>
			<ProductItem
				v-for="item in filteredProducts"
				:key="item.id"
				:item="item"
				@click="
					() => {
						modal.open = true
						modal.data = item
					}
				"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useModal } from '~/store/useModal'

const modal = useModal()
const search = ref('')
const { data: products } = await useFetch(`${useAPI()}/products`)

const filteredProducts = computed(() => {
	if (!search.value) return products.value
	return products.value.filter((item) =>
		item.title.toLowerCase().includes(search.value.toLowerCase()),
	)
})
</script>
