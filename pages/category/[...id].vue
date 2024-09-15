<template>
	<div class="w-full p-4">
		<Label class="text-lg font-bold text-primary">Category</Label>
		<div class="mt-4 h-20 w-full overflow-x-auto">
			<div class="flex w-full gap-2 md:justify-around">
				<CategoryItem
					v-for="item in categories"
					:key="item.id"
					:item="item"
					@click="useRouter().push(`/category/${item.id}`)"
				/>
			</div>
		</div>

		<Input v-model="search" class="my-2" placeholder="Find Product" />
		<div
			v-if="filteredProducts.length"
			class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-5"
		>
			<ProductItem
				v-for="item in filteredProducts"
				:key="item.id"
				:item="item"
				@click="() => modal.openModal('Display', item)"
			/>
		</div>
		<Label v-else class="mt-4 text-2xl text-primary opacity-80">
			No Products Found
		</Label>
	</div>
</template>

<script lang="ts" setup>
import { useModal } from '~/store/useModal'

const modal = useModal()
const route = useRoute()
const search = ref('')
const { data: categories } = await useFetch(`${useAPI()}/categories`)
const { data: products } = await useFetch(
	() => `${useAPI()}/categories/${route.params.id}/products`,
)

const filteredProducts = computed(() => {
	if (!search.value) return products.value
	return products.value.filter((item) =>
		item.title.toLowerCase().includes(search.value.toLowerCase()),
	)
})
</script>
