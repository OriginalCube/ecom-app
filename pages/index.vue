<template>
	<div class="w-full p-4">
		<!--Categories-->
		<div>
			<Label class="font-bold text-primary text-lg">Categories</Label>
			<div
				class="w-full h-60 flex justify-evenly gap-4 mt-2 flex-wrap bg-muted p-4 rounded-md border-primary border"
			>
				<CategoryItem v-for="item in categories" :key="item.id" :item="item" />
			</div>
		</div>

		<Promo />

		<!--Products-->
		<main class="w-full h-auto mt-4">
			<Label class="font-bold text-primary text-lg">Products</Label>

			<div class="grid grid-cols-3 gap-4 justify-items-center">
				<ProductItem v-for="item in products" />
			</div>
		</main>
	</div>
</template>

<script lang="ts" setup>
const { data: categories } = useApi('/categories')
const { data: products } = useApi('/products')
</script>
