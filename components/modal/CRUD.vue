<template>
	<div
		class="mb-4 flex h-auto w-full flex-col items-center gap-4 overflow-hidden px-4"
	>
		<Label class="m-auto mt-8 w-full text-4xl font-bold text-primary">
			Create Product
		</Label>
		<Input v-model="product.title" placeholder="Title" />
		<Input v-model="product.description" placeholder="Description" />
		<Input v-model="product.price" placeholder="Price" />
		<Select v-model="product.categoryId" placeholder="Category">
			<SelectTrigger>
				<SelectValue placeholder="Select a category" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="1">Clothes</SelectItem>
				<SelectItem value="2">Electronics</SelectItem>
				<SelectItem value="3">Furniture</SelectItem>
				<SelectItem value="4">Shoes</SelectItem>
			</SelectContent>
		</Select>
		<Button class="mt-4 w-full" @click="() => useAuth().createProduct(product)">
			Create
		</Button>
	</div>
</template>

<script lang="ts" setup>
const product = reactive({
	title: '',
	description: '',
	price: 0,
	categoryId: '',
	images: [],
})
</script>
